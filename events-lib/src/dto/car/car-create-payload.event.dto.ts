import { CarDetailsDto } from "src/dto/car/car-details.dto";
import { EventPayloadAbstract } from "src/dto/event-payload.abstract";

export interface CarCreatePayloadEventDto extends EventPayloadAbstract {
    data: CarDetailsDto;
}



