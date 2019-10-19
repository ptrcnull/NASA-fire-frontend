export interface FireNotification {
  id: number

  x: number
  y: number

  startDate: Date

  approveCounter: number
  fireTeam: boolean
  isFire: boolean

  description: string
  fireDepartamentDescription: string

  arePeople: boolean
  isWood: boolean
  isBuilding: boolean
  isHazardousMaterial: boolean
}
