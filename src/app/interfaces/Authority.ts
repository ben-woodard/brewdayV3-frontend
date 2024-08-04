import { User } from "./User";

export interface Authority {
  id: number,
  authority: string,
  user: User
}
