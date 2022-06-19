import { StorageSerializers } from '@vueuse/core'

import { loginSchema } from '~/helpers'
import { userService } from '~/services'
import { User } from '~/types'

const useAuth = () => {
  const user = useStorage<User>('@user', null, sessionStorage, { serializer: StorageSerializers.object })
  const token = useStorage('@token', '')
  const isLoading = ref(false)

  const login = async (values: typeof loginSchema) => {
    try {
      isLoading.value = true
      const loginResponse = await userService.login(values)
      token.value = loginResponse.token
      user.value = loginResponse.user
    }
    catch (err) {
      console.error(err)
    }
    finally {
      isLoading.value = false
    }
  }

  return {
    login,
    isLoading,
    user,
    token,
  }
}

export default useAuth
