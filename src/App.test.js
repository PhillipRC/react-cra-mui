import {
  render,
  screen,
} from '@testing-library/react'
import App from './App'

describe('App', () => {

  test('should render woot button', () => {
    render(<App />)
    const ele = screen.getByTestId('woot-btn')
    expect(ele).toBeInTheDocument()
  })

})
