export interface routerConfigType {
  routers: configItemType[]
}

export interface configItemType{
  path: string,
  component: Function,
  children?: configItemType[],
  to?: string
}

export interface actionType{
  type: string,
  payload: any
} 

