import { z } from "zod";

export const authFormSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(3, 'A senha deve possuir no minimo 3 caracteres'),
})

export type LoginResponse = authFormType & {token: string}

export type authFormType = z.infer<typeof authFormSchema>