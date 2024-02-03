import { ApiResponse } from "../models/api-response.model";
import { UserModel } from "../models/user.model";

export const getAuthMe = (): Promise<ApiResponse<UserModel>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data: UserModel = require('../mocks/auth_me.json')
      
      resolve({
        success: true,
        data
      })
    }, 200)
  })
}