import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';
import { UserModel } from '../_models/user.model';
import { AuthModel } from '../_models/auth.model';
import { AuthHTTPService } from './auth-http/auth-http.service';
// import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  // private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
  private authLocalStorageToken = 'v1.0school';

  // public fields
  currentUser$: Observable<UserModel>;
  isLoading$: Observable<boolean>;
  currentUserSubject: BehaviorSubject<UserModel>;
  isLoadingSubject: BehaviorSubject<boolean>;


  get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }

  set currentUserValue(user: UserModel) {
    this.currentUserSubject.next(user);
  }

  constructor(
    private authHttpService: AuthHTTPService,
    private router: Router
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.currentUserSubject = new BehaviorSubject<UserModel>(undefined);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isLoading$ = this.isLoadingSubject.asObservable();
    const subscr = this.getUserByToken().subscribe();
    this.unsubscribe.push(subscr);


    //john
    
  }

  // public methods
  login(email: string, password: string): Observable<UserModel> {
    
    this.isLoadingSubject.next(true);
    return this.authHttpService.login(email, password).pipe(
      // map((auth: AuthModel) => {
        map((user: UserModel) => {
        // this.saveToken(auth.accessToken,auth.refreshToken)
        // this.currentUserSubject = new BehaviorSubject<UserModel>(user);

        const result = this.setAuthFromLocalStorage(user);
        // this.dataEmitter$.emit(user)
        // console.log(auth['rows']['nombres']);
        console.log(user);
        // console.log(result);
        
        return result;
      }),
      // switchMap(() => this.getUserByToken()),
      // switchMap(() => this.getUserByToken()),
      catchError((err) => {
        console.error('err', err);
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
    
  }

  isLogged():Observable<string> | boolean{
    const auth = localStorage.getItem('v1.0school');
    return (auth != null) ? true : false;
    // console.log(auth);
    // return true
  }


  logout() {
    localStorage.removeItem(this.authLocalStorageToken);
    this.router.navigate(['/auth/login'], {
      queryParams: {},
    });
  }

  // private saveToken(accessToken:string,refreshToken:string):void{

  //   let Objtoken = {'accessToken': accessToken,'refreshToken': refreshToken}
  //   localStorage.setItem('v1.0school', JSON.stringify(Objtoken));  

  // }

  getUserByToken(): Observable<UserModel> {
    const auth = this.getAuthFromLocalStorage();
    if (!auth || !auth.accessToken) {
      return of(undefined);
    }

    this.isLoadingSubject.next(true);
    return this.authHttpService.getUserByToken(auth.accessToken).pipe(
      map((user: UserModel) => {
        if (user) {
          this.currentUserSubject = new BehaviorSubject<UserModel>(user);
        } else {
          this.logout();
        }
        return user;
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  // need create new user then login
  registration(user: UserModel): Observable<any> {
    this.isLoadingSubject.next(true);
    return this.authHttpService.createUser(user).pipe(
      map(() => {
        this.isLoadingSubject.next(false);
      }),
      switchMap(() => this.login(user.email, user.password)),
      catchError((err) => {
        console.error('err', err);
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  forgotPassword(email: string): Observable<boolean> {
    this.isLoadingSubject.next(true);
    return this.authHttpService
      .forgotPassword(email)
      .pipe(finalize(() => this.isLoadingSubject.next(false)));
  }

  // private methods
  private setAuthFromLocalStorage(auth: AuthModel): boolean {
    // store auth accessToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
    if (auth && auth.accessToken) {
      // localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
      let Objtoken = {'accessToken': auth.accessToken,
                      'refreshToken': auth.refreshToken,
                      'rows': auth.rows}
      localStorage.setItem('v1.0school', JSON.stringify(Objtoken));  
      return true;
    }
    return false;
  }

  private getAuthFromLocalStorage(): AuthModel {
    try {
      const authData = JSON.parse(
        localStorage.getItem(this.authLocalStorageToken)
      );
      return authData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
