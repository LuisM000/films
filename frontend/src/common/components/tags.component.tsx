import React from 'react'
import { TagComponent } from './tag.component'

interface TagsComponentProps {
  tags: Array<string>
}

export const TagsComponent: React.FC<TagsComponentProps> = ({ tags }) => {
  return (
    <div className='flex flex-row flex-wrap gap-x-4 gap-y-2'>
      {
        tags.map(tag => <TagComponent key={tag} tag={tag} />)
      }
    </div>
  )
}