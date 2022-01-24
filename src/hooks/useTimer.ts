import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  defaultDelay,
  defaultStep,
  inactiveTimeout,
  overdriveTimeout,
} from 'utils/constants'
import {
  addReward,
  incrementTotalOverdrives,
  selectStat,
} from '../store/slices/statSlice'
import {
  selectTimer,
  setInactive,
  setLastValue,
  setOverdriveCount,
  setTimerCount,
} from '../store/slices/timerSlice'

const useTimer = () => {
  const dispatch = useDispatch()
  const { timerCount, pressCount, overdriveCount, inactive, lastValue } =
    selectTimer()

  const { totalOverdrives, rewards } = selectStat()

  useEffect(() => {
    const interval = setInterval(() => {
      if (inactive) {
        if (timerCount >= defaultStep) {
          dispatch(setTimerCount(timerCount - defaultStep))
        }
      } else {
        dispatch(setTimerCount(timerCount + defaultStep))
      }
    }, defaultDelay)
    return () => {
      clearInterval(interval)
    }
  }, [timerCount, inactive])

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setInactive(true))
    }, inactiveTimeout)
    return () => {
      clearInterval(interval)
    }
  }, [inactive])

  useEffect(() => {
    const interval = setInterval(() => {
      if (overdriveCount >= 1) {
        dispatch(setOverdriveCount(overdriveCount - 1))
      }
      if (overdriveCount === overdriveTimeout) {
        dispatch(incrementTotalOverdrives())
      }
    }, 1)
    return () => {
      clearInterval(interval)
    }
  }, [overdriveCount])

  useEffect(() => {
    const sum = timerCount + pressCount
    if (sum - lastValue > 10) {
      dispatch(setLastValue(10 * Math.floor(sum / 10)))
      dispatch(addReward('REWARD!'))
    }
  }, [timerCount, pressCount])

  return {
    timerCount,
    pressCount,
    overdriveCount,
    inactive,
    lastValue,
    rewards,
    totalOverdrives,
  }
}

export default useTimer
