import { mainAPI } from '~/providers'
import { Login } from '~/types'
import { loginSchema } from '~/helpers'

const login = async (obj: typeof loginSchema) => {
  const {
    data,
  } = await mainAPI.post<Login>('/authenticate', obj)

  return data
}

export default {
  login,
}
