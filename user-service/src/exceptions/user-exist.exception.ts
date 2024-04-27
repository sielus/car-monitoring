export class UserExistException extends Error {
  constructor() {
    super('User exist');
  }
}
