import { Indicator, TreasureBox } from 'components'
import React from 'react'
import { selectTimer } from 'store/selectors'

const Board: React.FC = () => {
  const { inactive } = selectTimer()

  let className = 'treasure-box'
  if (inactive) {
    className += ' treasure-box__shaded'
  }

  return (
    <div className='board-container'>
      <TreasureBox />
      <Indicator />
    </div>
  )
}

export default Board
