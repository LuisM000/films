import React from 'react'

interface TagComponentProps {
  tag: string
}

export const TagComponent: React.FC<TagComponentProps> = ({ tag }) => {
  return <span key={tag} className='border-2 border-slate-300 rounded-xl px-2 py-0.5'>{tag}</span>
}