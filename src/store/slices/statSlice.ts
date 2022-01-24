import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useAppSelector } from 'store/hooks'
import { StatState } from 'types/State'
import type { RootState } from '../store'

const initialState: StatState = {
  rewards: [],
  totalOverdrives: 0,
}

export const statSlice = createSlice({
  name: 'stat',
  initialState,
  reducers: {
    addReward: (state, action: PayloadAction<string>) => {
      state.rewards.push(action.payload)
    },
    incrementTotalOverdrives: (state) => {
      state.totalOverdrives = state.totalOverdrives + 1
    },
  },
})

export const { addReward, incrementTotalOverdrives } = statSlice.actions

export const selectStat = () => useAppSelector((state: RootState) => state.stat)

export default statSlice.reducer
