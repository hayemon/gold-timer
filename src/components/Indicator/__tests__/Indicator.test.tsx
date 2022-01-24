import { screen } from '@testing-library/react'
import { setOverdriveCount } from 'store/actions'
import { renderWithProviders } from 'store/testUtils'
import { overdriveStep } from 'utils/constants'
import Indicator from '../Indicator'

describe('Indicator', () => {
  it('renders', () => {
    const { asFragment } = renderWithProviders(<Indicator />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('change overdriveCount', () => {
    const { store } = renderWithProviders(<Indicator />)

    store.dispatch(setOverdriveCount(overdriveStep))
    expect(store.getState().timer.overdriveCount).toBe(overdriveStep)
    screen.getByText('OVERDRIVE!')
    const seconds = (overdriveStep / 60).toFixed(1)
    screen.getByText(seconds)

    store.dispatch(setOverdriveCount(0))
    expect(store.getState().timer.overdriveCount).toBe(0)
  })
})
