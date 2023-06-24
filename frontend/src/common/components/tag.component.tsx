import React from 'react'

interface TagComponentProps {
  tag: string
}

export const TagComponent: React.FC<TagComponentProps> = ({ tag }) => {
  return <span key={tag} className='bg-purple-600 rounded-2xl text-light text-sm font-medium px-3 py-0.5'>{tag}</span>
}