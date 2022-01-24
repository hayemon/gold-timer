import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useAppSelector } from 'store/hooks'
import { TimerState } from 'types/State'
import type { RootState } from '../store'

const initialState: TimerState = {
  timerCount: 0,
  pressCount: 0,
  overdriveCount: 0,
  inactive: false,
  lastValue: 0,
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimerCount: (state, action: PayloadAction<number>) => {
      state.timerCount = action.payload
    },
    setPressCount: (state, action: PayloadAction<number>) => {
      state.pressCount = action.payload
    },
    setOverdriveCount: (state, action: PayloadAction<number>) => {
      state.overdriveCount = action.payload
    },
    setInactive: (state, action: PayloadAction<boolean>) => {
      state.inactive = action.payload
    },
    setLastValue: (state, action: PayloadAction<number>) => {
      state.lastValue = action.payload
    },
  },
})

export const {
  setTimerCount,
  setPressCount,
  setOverdriveCount,
  setInactive,
  setLastValue,
} = timerSlice.actions

export const selectTimer = () =>
  useAppSelector((state: RootState) => state.timer)

export default timerSlice.reducer
