import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { FutemitserviceService } from "../../modules/e-commerce/_services";
import { Futemit } from './_models/futemit.model'
import { FormBuilder, FormGroup } from "@angular/forms";
import { ISearchView } from "../../_metronic/shared/crud-table";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import {
  IPaginatorView,
  PaginatorState,
} from "../../_metronic/shared/crud-table";
// import { CustomersService } from '../../modules/e-commerce/_services';

@Component({
  selector: "app-inboxemit",
  templateUrl: "./inboxemit.component.html",
  styleUrls: ["./inboxemit.component.scss"],
})
export class InboxemitComponent implements OnInit, OnDestroy, IPaginatorView, ISearchView {
  isLoading: boolean;
  private subscriptions: Subscription[] = [];
  // ndata : any
  // futemitmodel: Futemit
  searchGroup: FormGroup;
  paginator: PaginatorState;
  paginate(paginator: PaginatorState) {
    this.futemitService.patchState({ paginator });
  }

  constructor(public futemitService: FutemitserviceService,private fb: FormBuilder) {
    // this.ndata = this.http.post<Futemit>(`http://localhost:4000/emitido/find`,this.futemitmodel).subscribe(res =>{
    //   console.log(res);
    // })
    
  }
  
  ngOnInit(): void {
    this.searchForm();
    const sb = this.futemitService.isLoading$.subscribe(
      (res) => (this.isLoading = res)
    );
    this.subscriptions.push(sb);
    this.paginator = this.futemitService.paginator;
    this.futemitService.fetch();
  }

    // search
    searchForm() {
      // +
      this.searchGroup = this.fb.group({
        searchTerm: [""],
      });
      const searchEvent = this.searchGroup.controls.searchTerm.valueChanges
        .pipe(
          /*
            The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator,
            we are limiting the amount of server requests emitted to a maximum of one every 150ms
          */
          debounceTime(150),
          distinctUntilChanged()
        )
        .subscribe((val) => this.search(val));
      this.subscriptions.push(searchEvent);
    }
  
    search(searchTerm: string) {
      // +
      this.futemitService.patchState({ searchTerm });
    }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }
}
