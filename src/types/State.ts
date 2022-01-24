export type TimerState = {
  timerCount: number
  pressCount: number
  overdriveCount: number
  inactive: boolean
  lastValue: number
}

export type StatState = {
  rewards: string[]
  totalOverdrives: number
}
