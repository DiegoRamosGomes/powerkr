import { Card } from "../../Cards/Card";
import { XStack } from "tamagui";
import { useEffect, useState } from "react";
import { MetricsModel } from "../../../models/metrics.model";
import { MetricsService } from "../../../services/metrics.service";
import { RoundedProgressBar } from "../../RoundedProgressBar";

export const Metrics = () => {
  const service = MetricsService()
  const [metrics, setMetrics] = useState<MetricsModel[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    service.personalMetrics()
      .then(value => {
        if (value.success) {
          setMetrics(value.metrics)
        }
        setLoading(false)
      })
  }, []);
  
  if (loading) {
    return (
      <XStack f={1} gap={'$5'} mx={'$5'} h={170}>
        <Card f={1}/>
        <Card f={1}/>
      </XStack>
    )
  }
  
  return (
    <XStack flexWrap={'wrap'} gap={'$6'} mx={'$5'}>
      {metrics.map((item) => (
        <Card key={item.id}>
          <RoundedProgressBar
            value={item.value}
            max={item.max}
            title={item.title}
            subtitle={item.subtitle}
          />
        </Card>
      ))}
    </XStack>
  )
}

