export class UserScopeRelationExistException extends Error {
  constructor() {
    super('User - Scope relation exist');
  }
}
