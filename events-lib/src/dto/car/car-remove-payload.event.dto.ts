import { CarIdentityDto } from "src/dto/car/car-identity.dto";
import { EventPayloadAbstract } from "src/dto/event-payload.abstract";

export interface CarRemovePayloadEventDto extends EventPayloadAbstract {
    data: CarIdentityDto;
}

