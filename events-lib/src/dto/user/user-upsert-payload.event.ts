import { EventPayloadAbstract } from "src/dto/event-payload.abstract";

export interface UserUpsertPayloadEvent extends EventPayloadAbstract {
    data: UserDetails;
}

interface UserDetails {
    userId: string;
    login: string;
    password: string;
}
