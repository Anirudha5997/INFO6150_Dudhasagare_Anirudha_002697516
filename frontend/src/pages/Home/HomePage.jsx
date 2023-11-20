import './Home.css'
import PostCard from '../../components/PostCard'

const HomePage = ({data}) => {
  return (
    <div>
      <PostCard {...data} />
    </div>
  )
}
export default HomePage;