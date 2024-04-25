export class RecordAlreadyExistException extends Error {
  constructor() {
    super('Record already exist');
  }
}
