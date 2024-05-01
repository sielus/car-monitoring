import { EventPayloadAbstract } from "src/dto/event-payload.abstract";

export interface UserScopeRelationPayloadEvent  extends EventPayloadAbstract {
  data: UserScopeRelationData;
};

export interface UserScopeRelationData  {
  userId: string;
  scope: string;
};
