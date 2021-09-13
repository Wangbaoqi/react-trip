import { type } from "os"


interface AirPortCityProp {
  visible: boolean,
  title?: string,
  onCheck?: () => void,
  closePop: () => void
}


type AirPortCityHot = {
  code: string,
  desc: string,
  name: string
  timezone: string
}

type AirPortCityIndex = {
  p: string,
  cl: Array<AirPortCityHot>,
}


export type {
  AirPortCityProp,
  AirPortCityHot,
  AirPortCityIndex
}