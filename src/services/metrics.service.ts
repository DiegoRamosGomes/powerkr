import { getMetrics } from "../mocks/metrics";

export const MetricsService = () => {
  const personalMetrics = async () => {
    const {data: metrics} = await getMetrics()
    
    return {
      success: true,
      metrics
    }
  }
  
  return {
    personalMetrics
  }
}