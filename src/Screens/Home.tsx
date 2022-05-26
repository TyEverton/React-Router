import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  //   useNavigate is a function that takes a string as an argument when its called -

  return (
    <div>
      This is the Home Screen
      <div>
        <button onClick={() => navigate('/about')}>
          Take us to the About Page
        </button>
        <button onClick={() => navigate('/profile')}>
          Take us to the profile page
        </button>
      </div>
    </div>
  )
}

export default Home
