export class UserScopeRelationNotFoundException extends Error {
  constructor() {
    super('User - Scope relation not found');
  }
}
