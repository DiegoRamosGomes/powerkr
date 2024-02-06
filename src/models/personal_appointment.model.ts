export type PersonalAppointmentModel = {
  id: number
  title: string
  date: string
  priority: 'High' | 'Medium' | 'Low'
}