import { Authority } from "./Authority";
import { Company } from "./Company";

export interface User {
  id?: number,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  company: Company,
  requestedcompany: Company,
  authorities?: Authority[],
}
