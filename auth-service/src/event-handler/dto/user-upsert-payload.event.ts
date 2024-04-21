export type UserUpsertPayloadEvent = {
  data: UserDetails;
  createdAt: Date;
};

type UserDetails = {
  userId: string;
  login: string;
  password: string;
};
