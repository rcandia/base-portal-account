import { bool, object, setLocale, string } from 'yup'

setLocale({
  mixed: {
    required: 'This field is required',
  },
})

export const loginSchema = object({
  email: string().required().email('Please insert a valid email'),
  password: string().required().min(8, 'Password must be at least 8 characters'),
  remember: bool(),
})

