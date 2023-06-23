import React from 'react'

interface TagComponentProps {
  tag: string
}

export const TagComponent: React.FC<TagComponentProps> = ({ tag }) => {
  return <span key={tag} className='bg-cyan-300 rounded-2xl text-dark text-sm font-medium px-3 py-0.5'>{tag}</span>
}