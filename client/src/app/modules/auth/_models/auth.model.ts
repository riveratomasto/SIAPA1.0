export class AuthModel {
  accessToken: string;
  refreshToken: string;
  expiresIn: Date;
  // usuario: string;
  // perfil: number;
  // nombres: string;
  rows:{}

  setAuth(auth: any) {
    this.accessToken = auth.accessToken;
    this.refreshToken = auth.refreshToken;
    this.expiresIn = auth.expiresIn;
  }
}
