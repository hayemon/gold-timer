import { screen } from '@testing-library/react'
import { setPressCount, setTimerCount } from 'store/actions'
import { renderWithProviders } from 'store/testUtils'
import TreasureBox from '../TreasureBox'

describe('TreasureBox', () => {
  it('renders', () => {
    const { asFragment } = renderWithProviders(<TreasureBox />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('timerCount', () => {
    const { store } = renderWithProviders(<TreasureBox />)

    setTimeout(() => {
      expect(store.getState().timer.timerCount).toBe(1)
    }, 1000)

    setTimeout(() => {
      expect(store.getState().timer.timerCount).toBe(3)
    }, 2000)

    store.dispatch(setTimerCount(10))
    screen.getByText('10 Coins!!!')
  })

  it('setPressCount', () => {
    const { store } = renderWithProviders(<TreasureBox />)

    store.dispatch(setPressCount(1))
    expect(store.getState().timer.pressCount).toBe(1)
  })
})
