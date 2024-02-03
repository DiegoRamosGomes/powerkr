import { authFormType, LoginResponse } from "../models/auth-user.model";
import { ApiResponse } from "../models/api-response.model";

export const postLoginUser = (email: string, password: string): Promise<ApiResponse<LoginResponse>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = require('../mocks/auth_login.json')
      
      data.token = '69980e7bcb74bbe5b7d256f163dcdc6f'
      
      if (email === data.email && password === data.password) {
        resolve({
          success: true,
          data: data
        })
      } else {
        reject({
          message: 'Usuário ou senha inválido'
        })
      }
    }, 200)
  })
}