export { UserScopeRelationPayloadEvent, UserScopeRelationData } from 'src/dto/scope/user-scope-relation-payload.event'
export { UserRemovePayloadEvent } from 'src/dto/user/user-remove-payload.event'
export { UserUpsertPayloadEvent } from 'src/dto/user/user-upsert-payload.event'
export const topics = {
    createUserScopeRelationTopic: 'create-user-scope-relation',
    removeUserScopeRelationTopic: 'remove-user-scope-relation',
    upsertUserTopic: 'upsert-user',
    removeUserTopic: 'remove-user'
}

export const services = {
    userService: 'user-service',
    authService: 'auth-service',
}
