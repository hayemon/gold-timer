import { screen } from '@testing-library/react'
import { addReward } from 'store/actions'
import { renderWithProviders } from 'store/testUtils'
import MainPage from '../MainPage'

describe('MainPage', () => {
  it('renders', () => {
    const { asFragment } = renderWithProviders(<MainPage />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('add rewards', () => {
    const { store } = renderWithProviders(<MainPage />)

    store.dispatch(addReward('Test'))
    expect(store.getState().stat.rewards[0]).toBe('Test')
    screen.getByText('Test')

    store.dispatch(addReward('Test'))
    expect(store.getState().stat.rewards.toString()).toBe('Test,Test')
  })
})
