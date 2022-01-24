import { Button, Typography } from 'antd'
import throttle from 'lodash.throttle'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setInactive, setOverdriveCount, setPressCount } from 'store/actions'
import { selectTimer } from 'store/selectors'
import { getStep } from 'utils/helpers'

const TreasureBox: React.FC = () => {
  const dispatch = useDispatch()
  const { timerCount, pressCount, overdriveCount, inactive } = selectTimer()

  const clickHandler = () => {
    dispatch(setPressCount(pressCount + getStep(overdriveCount)))
    dispatch(setInactive(false))
    if (Math.random() > 0.9 && overdriveCount <= 0) {
      dispatch(setOverdriveCount(10000))
    }
  }

  const throttledClickHandler = throttle(clickHandler, 333, {
    leading: false,
  })

  let className = 'treasure-box'
  if (inactive) {
    className += ' treasure-box__shaded'
  }

  return (
    <div className='treasure-box-container'>
      <Typography.Title>{timerCount + pressCount} Coins!!!</Typography.Title>
      <Button
        style={{ width: 200, height: 200, margin: 0, padding: 0 }}
        onClick={throttledClickHandler}
      >
        <div className={className} />
      </Button>
    </div>
  )
}

export default TreasureBox
