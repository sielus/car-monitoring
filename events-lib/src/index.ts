export {
    UserScopeRelationPayloadEventDto, UserScopeRelationDataDto
} from 'src/dto/scope/user-scope-relation-payload.event.dto'
export { UserRemovePayloadEventDto } from 'src/dto/user/user-remove-payload.event.dto'
export { UserUpsertPayloadEventDto } from 'src/dto/user/user-upsert-payload.event.dto'
export { UserIdentityDto } from 'src/dto/user/user-identity.dto'
export { UserDetailsDto } from 'src/dto/user/user-details.dto'


export { CarCreatePayloadEventDto } from 'src/dto/car/car-create-payload.event.dto'
export { CarDetailsDto } from 'src/dto/car/car-details.dto'
export { CarIdentityDto } from 'src/dto/car/car-identity.dto'
export { CarRemovePayloadEventDto } from 'src/dto/car/car-remove-payload.event.dto'

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
