import { personalAppointmentsMock } from "../mocks/personal_appointments";
import { PersonalAppointmentModel } from "../models/personal_appointment.model";

export const AppointmentService = () => {
  const getPersonalAppointments = async (): Promise<PersonalAppointmentModel[]> => {
    const appointments = await personalAppointmentsMock()
    if(appointments.success) {
      return appointments.data
    }
    
    return []
  }
  
  return {
    getPersonalAppointments
  }
}