export class RecordNotFoundException extends Error {
  constructor() {
    super('Record Not Found');
  }
}
