import React from 'react'
import './contact.css'
import PostCard from '../../components/PostCard'

const contact = ({data}) => {
  return (
    <PostCard {...data} />
  )
}

export default contact