import { renderWithProviders } from 'store/testUtils'
import Board from '../Board'

describe('Board', () => {
  it('renders', () => {
    const { asFragment } = renderWithProviders(<Board />)
    expect(asFragment()).toMatchSnapshot()
  })
})
