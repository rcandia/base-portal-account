import axios, { AxiosError } from 'axios'
import { useStorage } from '@vueuse/core'

import { config as vueConfig } from '~/helpers'

const instance = axios.create()

instance.interceptors.request.use((config) => {
  config.baseURL = vueConfig.APP_API_URL

  return {
    ...config,
  }
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    const status = error.response?.status

    if (status === 401) {
      const token = useStorage('@token', '')
      token.value = ''

      const router = useRouter()
      router.push('/account/login')
      return
    }

    return Promise.reject(error)
  },
)

export default instance
