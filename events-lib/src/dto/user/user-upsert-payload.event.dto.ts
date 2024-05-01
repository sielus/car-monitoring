import { EventPayloadAbstract } from "src/dto/event-payload.abstract";
import { UserDetailsDto } from "src/dto/user/user-details.dto";

/**
 * Represents the payload event for user Upserting (create/update).
 * @interface
 */
export interface UserUpsertPayloadEventDto extends EventPayloadAbstract {
    data: UserDetailsDto;
}