import { EventPayloadAbstract } from 'src/cron-jobs/services/events/dto/event-payload.abstract';

export class UserScopeRelationPayloadEvent extends EventPayloadAbstract {
  constructor(relation: UserScopeRelationData) {
    super();
    this.data = relation;
  }

  data: UserScopeRelationData;
}

export type UserScopeRelationData = {
  userId: string;
  scope: string;
};
