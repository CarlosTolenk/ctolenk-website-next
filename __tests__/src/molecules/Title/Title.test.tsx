import React from 'react'
import { render, RenderResult, screen } from '@testing-library/react'
import Title from 'src/components/molecules/Title'

describe('Index', () => {
  const setup = ({ title, slogan }: any) => {
    return render(<Title title={title} slogan={slogan} />)
  }

  it('should renders component', () => {
    const wrapper = setup({ title: '', slogan: ' ' })
    expect(wrapper).toBeDefined()
  })

  it('should renders Title and Slogan', () => {
    setup({ title: 'Hola', slogan: 'Mundo' })
    expect(screen.getByRole('heading', { name: 'Hola' })).toBeInTheDocument()
    expect(screen.getByText(/mundo/i)).toBeInTheDocument()
  })
})
