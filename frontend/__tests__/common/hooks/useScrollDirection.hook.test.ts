import { describe, test } from 'vitest'
import { Direction, useScrollDirection } from '../../../src/common/hooks'
import { fireEvent, renderHook, act } from '@testing-library/react'

describe('Use Scroll Direction Hook', () => {

  test('should be initialized with still direction', () => {
    const { result } = renderHook(() => useScrollDirection())

    expect(result.current).toBe(Direction.still)
  })

  test('should be down when scroll to down', () => {
    const { result } = renderHook(() => useScrollDirection())

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 100 } })
    })

    expect(result.current).toBe(Direction.down)
  })

  test('should be down when scroll to up', () => {
    const { result } = renderHook(() => useScrollDirection())

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: -100 } })
    })
    expect(result.current).toBe(Direction.up)
  })


  test('should be down when scroll to down', async () => {
    const { result } = renderHook(() => useScrollDirection())

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 100 } })
    })

    expect(result.current).toBe(Direction.down)
  })

  test('should not be down when scroll to down is very small', async () => {
    const { result } = renderHook(() => useScrollDirection())
    //Initially, we set the scroll to the top. 
    act(() => {
      fireEvent.scroll(window, { target: { scrollY: -100 } })
    })
    expect(result.current).toBe(Direction.up)

    const smallScroll = -97
    act(() => {
      fireEvent.scroll(window, { target: { scrollY: smallScroll } })
    })
    expect(result.current).not.toBe(Direction.down)
  })

  test('should not be up when scroll to up is very small', async () => {
    const { result } = renderHook(() => useScrollDirection())
    //Initially, we set the scroll to the down. 
    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 50 } })
    })
    expect(result.current).toBe(Direction.down)

    const smallScroll = 51
    act(() => {
      fireEvent.scroll(window, { target: { scrollY: smallScroll } })
    })
    expect(result.current).not.toBe(Direction.up)
  })
})