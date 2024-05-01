import { EventPayloadAbstract } from "src/dto/event-payload.abstract";

/**
 * Represents the payload event for create/remove user scope relation.
 * @interface
 */
export interface UserScopeRelationPayloadEvent extends EventPayloadAbstract {
    data: UserScopeRelationData;
}

export interface UserScopeRelationData {
    /**
     * The ID of the user from User-Service
     * @type {string}
     */
    userId: string;

    /**
     * The scope associated with the user.
     * @type {string}
     */
    scope: string;
}
