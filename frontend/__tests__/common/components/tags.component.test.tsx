import { render, screen } from '@testing-library/react'
import React from 'react'
import { TagsComponent } from '../../../src/common/components/tags.component'
import { describe, test } from 'vitest'

describe('Tags Component', () => {
  test('renders component with text of tag', () => {
    const tags = ['foo', 'bar']
    render(<TagsComponent tags={tags} />)

    screen.getByText('foo')
    screen.getByText('bar')
  })

  test('renders component with tags in order', () => {
    const tags = ['foo', 'bar']
    render(<TagsComponent tags={tags} />)

    const tagElements = screen.getAllByText(/foo|bar/i)

    expect(tagElements[0]).toHaveTextContent('foo')
    expect(tagElements[1]).toHaveTextContent('bar')
  })
})