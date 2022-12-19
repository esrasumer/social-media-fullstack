import "./home.scss"
import Posts from '../../components/posts/Posts'
import Stories from '../../components/stories/Stories'

function Home() {
  return (
    <div className='home'>
      <Stories />
      <Posts />
    </div>
  )
}

export default Home