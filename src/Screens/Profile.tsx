import { useNavigate } from 'react-router-dom'
function Profile() {
  const navigateForwardOrBack = useNavigate()

  return (
    <div>
      <button onClick={() => navigateForwardOrBack('/profile/myProfile')}>
        Move to the MyProfile page
      </button>
      <button onClick={() => navigateForwardOrBack(-1)}>
        Want to go back a page?
      </button>
    </div>
  )
}

export default Profile
