import {string, z} from 'zod'



const userNameMin="username should be min 3 character"
const userNameMax='usename should be max length 10 characters'


export const passwordValidation = z
  .string()
  .min(8, { message: "Password should have minimum length of 8" })
  .max(20, "Password is too long")
  .regex(/^(?=.*[A-Z]).{8,}$/, {
    message:
      "Should Contain at least one uppercase letter and have a minimum length of 8 characters.",
  });


export const userSchema=z.object({
    username:z.string().min(3,{message:userNameMin}).max(10,{message:userNameMax}),
    password:passwordValidation
})

export const contentSchema=z.object({
    type:z.enum(['document', 'tweet', 'youtube', 'link']),
    link:z.string(),
    title:z.string(),
    tags: z.string().array()
})