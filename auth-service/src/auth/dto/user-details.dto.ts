export class UserDetailsDto {
  constructor(userId: string, login: string, scope: Array<string>) {
    this.userId = userId;
    this.login = login;
    this.scope = scope;
  }

  userId: string;
  login: string;
  scope: Array<string>;
}
