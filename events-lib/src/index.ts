export {
    UserScopeRelationPayloadEventDto, UserScopeRelationData
} from 'src/dto/scope/user-scope-relation-payload.event.dto'
export { UserRemovePayloadEventDto } from 'src/dto/user/user-remove-payload.event.dto'
export { UserUpsertPayloadEventDto } from 'src/dto/user/user-upsert-payload.event.dto'
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
