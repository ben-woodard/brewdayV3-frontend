import { Authority } from "./Authority";

export interface SignUpRequest {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  companyId: number,
  authorityOpt?: Authority[]
}
