import { ApiResponse } from "../models/api-response.model";
import { MetricsModel } from "../models/metrics.model";

export const getMetrics = (): Promise<ApiResponse<MetricsModel[]>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data: MetricsModel[] = require('../mocks/metrics.json')
      
      resolve({
        success: true,
        data
      })
    }, 200)
  })
}