import { ScrollView, Text, XStack } from "tamagui";
import { Card } from "../../Cards/Card";
import ChatTeardropIcon from "../../../assets/icons/ChatTeardropIcon";
import CalendarIcon from "../../../assets/icons/CalendarIcon";
import { useEffect, useState } from "react";
import { PersonalAppointmentModel } from "../../../models/personal_appointment.model";
import { AppointmentService } from "../../../services/appointment.service";
import { Badge } from "../../Badge";


export const ApprovedAppointments = () => {
  const service = AppointmentService()
  
  const [loading, setLoading] = useState(true)
  const [appointments, setAppointments] = useState<PersonalAppointmentModel[]>([])
  
  useEffect(() => {
    service.getPersonalAppointments()
      .then(value => {
        setAppointments(value)
        setLoading(false)
      })
  }, []);
  
  if (loading) {
    return (
      <XStack ml={'$5'} gap={'$4'}>
        <Card size={'big'} w={'$18'} height={'$11'}/>
        <Card size={'big'} w={'$18'} height={'$11'}/>
      </XStack>
    )
  }
  
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} px={'$-5'} contentContainerStyle={{
      paddingHorizontal: 24
    }}>
      <XStack gap={'$4'}>
        {appointments.map((appointment) => {
          return (
            <Card size={'big'} w={'$18'} key={appointment.id}>
              <Text
                marginBottom={'$5'}
                fontFamily={'$medium'}
                color={'$content_text_primary'}
              >{appointment.title}</Text>
              <XStack justifyContent={'space-between'} alignItems={'center'}>
                <ChatTeardropIcon/>
                <XStack gap={'$1.5'}>
                  <CalendarIcon/>
                  <Text color={'$content_text_tertiary'}>{appointment.date}</Text>
                </XStack>
                <Badge priority={appointment.priority}>{appointment.priority}</Badge>
              </XStack>
            </Card>
          )
        })}
      </XStack>
    </ScrollView>
  )
}
