import { ApiResponse } from "../models/api-response.model";
import { PersonalAppointmentModel } from "../models/personal_appointment.model";

export const personalAppointmentsMock = (): Promise<ApiResponse<PersonalAppointmentModel[]>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = require('../mocks/personal_appointments.json')
      
      resolve({
        success: true,
        data
      })
    }, 250)
  })
}