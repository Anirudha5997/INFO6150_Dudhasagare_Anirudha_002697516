import React from 'react'
import './jobs.css'
import PostCard from '../../components/PostCard'

const jobs = ({data}) => {
  return (
    <PostCard {...data} />
  )
}

export default jobs