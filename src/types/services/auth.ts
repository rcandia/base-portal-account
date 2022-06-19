export interface User {
  email: string
  name: string
  lastName: string
  id: string
}

export interface Login {
  token: string
  user: User
}
