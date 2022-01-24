import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit'
import statReducer from './slices/statSlice'
import timerReducer from './slices/timerSlice'

const rootReducer = combineReducers({
  timer: timerReducer,
  stat: statReducer,
})

export const createStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']
