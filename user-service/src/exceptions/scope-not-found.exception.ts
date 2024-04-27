export class ScopeNotFoundException extends Error {
  constructor() {
    super('Scope not found');
  }
}
