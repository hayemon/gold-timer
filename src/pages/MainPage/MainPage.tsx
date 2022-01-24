import { Card, Col, List, Row } from 'antd'
import { Board } from 'components'
import useTimer from '../../hooks/useTimer'

const MainPage: React.FC = () => {
  const { inactive, lastValue, rewards, totalOverdrives } = useTimer()

  return (
    <div className='container'>
      <Row>
        <Col span={6}>
          <Card title='Stats'>
            <List>
              {inactive && <List.Item>Inactive</List.Item>}
              <List.Item>Previous Max {lastValue}</List.Item>
              <List.Item>Overldrives Count {totalOverdrives}</List.Item>
            </List>
          </Card>
        </Col>
        <Col span={12}>
          <Board />
        </Col>
        <Col span={6}>
          <Card title='Rewards'>
            <List>
              {rewards.map((x, i) => (
                <List.Item key={i}>{x}</List.Item>
              ))}
            </List>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default MainPage
