import { EventPayloadAbstract } from "src/dto/event-payload.abstract";
import { UserIdentityDto } from "src/dto/user/user-identity.dto";

/**
 * Represents the payload event for user removal.
 * @interface
 */
export interface UserRemovePayloadEventDto extends EventPayloadAbstract {
    data: UserIdentityDto;
}

