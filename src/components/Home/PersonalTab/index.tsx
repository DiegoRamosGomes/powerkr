import { Section } from "../../Section";
import { Card } from "../../Cards/Card";
import { CardEmployeeHome } from "../../Cards/CardEmployeeHome";
import { Text } from "tamagui";
import { ApprovedAppointments } from "../ApprovedAppointments";
import { Metrics } from "../Metrics";

export const PersonalTab = () => {
  return (
    <>
      <Section px={'$5'}>
        <Card size={'big'}>
          <CardEmployeeHome/>
        </Card>
      </Section>
      <Section gap={'$6'}>
        <Text
          px={'$5'}
          color={'$content_text_tertiary'}
          fontFamily={'$medium'}
          fontSize={'$2'}
        >Compromissos Homologados</Text>
        <ApprovedAppointments/>
      </Section>
      <Section>
        <Text
          px={'$5'}
          color={'$content_text_tertiary'}
          fontFamily={'$medium'}
          fontSize={'$2'}
          mb={'$4'}
        >Métricas</Text>
        <Metrics />
      </Section>
    </>
  )
}
