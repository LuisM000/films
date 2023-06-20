import { render, screen } from '@testing-library/react'
import React from 'react'
import { TagComponent } from '../../../src/common/components/tag.component'
import { describe, test, expect } from 'vitest'

describe('Tag Component', () => {
  test('renders component with text of tag', () => {
    render(<TagComponent tag='dummy tag' />)

    screen.getByText('dummy tag')
  })
})