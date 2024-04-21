export type UserRemovePayloadEvent = {
  data: UserDetails;
  createdAt: Date;
};

type UserDetails = {
  userId: string;
};
