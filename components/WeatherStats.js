"use client"
import { Card, Metric, Text} from "@tremor/react"

function WeatherStats({title,metric,color}) {
  return (
    <Card decoration="top" decorationColor={color}>
        <Text>{title}</Text>
        <Metric>{metric}</Metric>
    </Card>
  )
}

export default WeatherStats