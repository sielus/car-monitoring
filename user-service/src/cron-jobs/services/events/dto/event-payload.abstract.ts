export abstract class EventPayloadAbstract {
  createdAt: Date;

  protected constructor() {
    this.createdAt = new Date();
  }
}
