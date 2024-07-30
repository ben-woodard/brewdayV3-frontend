export interface SignUpRequest {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  companyName: string,
  authorityOpt?: string
}
