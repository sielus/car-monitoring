import { EventPayloadAbstract } from "src/dto/event-payload.abstract";

/**
 * Represents the payload event for user removal.
 * @interface
 */
export interface UserRemovePayloadEvent extends EventPayloadAbstract {
    data: UserDetails;
}

interface UserDetails {
    /**
     * The ID of the user from User-Service
     * @type {string}
     */
    userId: string;
}
