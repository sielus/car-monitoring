import { EventPayloadAbstract } from 'src/cron-jobs/services/events/dto/event-payload.abstract';

export class UserUpsertPayloadEvent extends EventPayloadAbstract {
  constructor(userDetails: UserDetails) {
    super();
    this.data = userDetails;
  }
  data: UserDetails;
}

type UserDetails = {
  userId: string;
  login: string;
  password: string;
};
