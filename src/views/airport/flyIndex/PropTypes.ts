


type AirPortCityInter = {
  rname: string,
  areal: AirPortCityIndex[]
}
type AirPortCityState = {
  ResponseStatus?: any,
  hl?: AirPortCityHot[],
  pl?: AirPortCityIndex[],
  rg?: AirPortCityInter[]
}


type AirPortCityIndex = {
  p?: string,
  cl?: Array<AirPortCityHot>,
}

type AirPortCityData = {
  inland: AirPortCityState,
  inter: AirPortCityState
}

type AirPortCityHot = {
  al?: null | string,
  cname?: string,
  code?: string,
  desc?: string,
  name?: string
  timezone?: string,
  checked?: boolean
}





interface AirPortGnProp {
  airportCity: AirPortCityState,

}
interface AirPortCityProp {
  airportCity?: AirPortCityState,
  visible?: boolean,
  title?: string,
  onCheck?: (e: AirPortCityHot) => void,
  closePop?: () => void
}

interface CalenderPriceProp {
  visible?: boolean,
  type?: string,
  dateType?: number,
  dDate?: string,
  aDate?: string,
  onConfirm?: (e: Date[]) => void,
  onClose?: () => void,
  onSelect?: (e: Date[]) => void,
  onChangeDate?: (e: number) => void
}




export type {
  AirPortCityData,
  AirPortCityState,
  AirPortCityProp,
  AirPortGnProp,
  CalenderPriceProp,
  AirPortCityHot,
  AirPortCityIndex,
  AirPortCityInter
}