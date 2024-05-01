import { EventPayloadAbstract } from "src/dto/event-payload.abstract";

/**
 * Represents the payload event for user Upserting (create/update).
 * @interface
 */
export interface UserUpsertPayloadEvent extends EventPayloadAbstract {
    data: UserDetails;
}

interface UserDetails {
    /**
     * The ID of the user from User-Service
     * @type {string}
     */
    userId: string;

    /**
     * The login username of the user.
     * @type {string}
     */
    login: string;

    /**
     * The password of the user.
     * @type {string}
     * @description This data comes from the user-service.
     */
    password: string;
}
