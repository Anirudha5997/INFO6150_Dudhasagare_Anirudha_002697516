import React from 'react'
import './aboutUs.css'
import PostCard from '../../components/PostCard'

const aboutUs = ({data}) => {
  return (
    <div>
      <PostCard {...data} />
    </div>
  )
}

export default aboutUs