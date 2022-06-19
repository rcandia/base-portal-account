import { Configuration } from '~/types'

export const config: Configuration = {
  APP_API_URL: import.meta.env.VITE_APP_API_URL as string,
  APP_MICRO_URL: import.meta.env.VITE_APP_MICRO_URL as string,
}
