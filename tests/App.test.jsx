import { Navbar } from '../src/Pages/Navbar'
import { render, screen } from '@testing-library/react'

it('render PresentacionContent', () => {
  render(<main />)
  expect(screen.getByText('Florencia Ayan')).toBeDefined()
})
