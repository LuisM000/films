import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { HeaderComponent } from '../../../src/common-app/components'
import { Direction, useScrollDirection } from '../../../src/common/hooks'
import { describe, test, expect, vi, MockedFunction } from 'vitest'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

//vi.mock('../../../src/common/hooks/useScrollDirection.hook')
//const mockUseScrollDirection = useScrollDirection as MockedFunction<typeof useScrollDirection>

describe('Header Component', () => {
  test('renders component ', () => {
    render(<MemoryRouter><HeaderComponent /></MemoryRouter>)
    const header = screen.getByRole('banner')

    expect(header).toBeInTheDocument()
  })

  test('Header is not visible when scrolling down', () => {
    render(<MemoryRouter><HeaderComponent /></MemoryRouter>)
    const header = screen.getByRole('banner')

    fireEvent.scroll(window, { target: { scrollY: 100 } })

    expect(header).toHaveClass('opacity-0')
  })

  test('Header is visible when scrolling up', () => {
    render(<MemoryRouter><HeaderComponent /></MemoryRouter>)
    const header = screen.getByRole('banner')

    fireEvent.scroll(window, { target: { scrollY: -50 } })

    expect(header).toHaveClass('opacity-1')
  })

  test('Multiple scrolling actions', async () => {
    render(<MemoryRouter><HeaderComponent /></MemoryRouter>)
    const header = screen.getByRole('banner')

    fireEvent.scroll(window, { target: { scrollY: 100 } })
    expect(header).toHaveClass('opacity-0')

    fireEvent.scroll(window, { target: { scrollY: 200 } })
    expect(header).toHaveClass('opacity-0')

    fireEvent.scroll(window, { target: { scrollY: 50 } })
    expect(header).toHaveClass('opacity-1')

    fireEvent.scroll(window, { target: { scrollY: 100 } })
    expect(header).toHaveClass('opacity-0')
  })
})