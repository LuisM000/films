import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import customMatchers from './utils/customMatchers'
import '@testing-library/jest-dom'

expect.extend(matchers)
expect.extend(customMatchers)


beforeEach(() => {
  vi.clearAllMocks()
})

afterEach(() => {
  cleanup()
})