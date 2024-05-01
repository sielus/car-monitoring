import { EventPayloadAbstract } from "src/dto/event-payload.abstract";

export interface UserRemovePayloadEvent extends EventPayloadAbstract {
    data: UserDetails;
}

interface UserDetails {
    userId: string;
}
