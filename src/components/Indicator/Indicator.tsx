import { LoadingOutlined } from '@ant-design/icons'
import { Spin, Typography } from 'antd'
import React from 'react'
import { selectTimer } from 'store/selectors'

const Indicator: React.FC = () => {
  const { overdriveCount, inactive } = selectTimer()

  let className = 'treasure-box'
  if (inactive) {
    className += ' treasure-box__shaded'
  }

  return (
    <div className='indicator-container'>
      {overdriveCount > 0 && (
        <>
          <Typography.Title level={5} type='danger'>
            OVERDRIVE!
          </Typography.Title>
          <Spin
            indicator={
              <LoadingOutlined style={{ fontSize: 80, color: 'danger' }} spin />
            }
          />
          <br />
          <Typography.Title level={3} type='danger'>
            {(overdriveCount / 60).toFixed(1)}
          </Typography.Title>
        </>
      )}
    </div>
  )
}

export default Indicator
