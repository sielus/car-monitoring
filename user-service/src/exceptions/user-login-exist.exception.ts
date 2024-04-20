export class UserLoginExistException extends Error {
  constructor() {
    super('User Login Exist');
  }
}
