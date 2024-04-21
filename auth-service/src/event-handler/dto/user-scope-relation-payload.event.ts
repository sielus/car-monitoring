
export type UserScopeRelationPayloadEvent = {
  data: UserScopeRelationData;
  createdAt: Date;
};

export type UserScopeRelationData = {
  userId: string;
  scope: string;
};
