import { useNavigate } from 'react-router-dom'
function MyProfile() {
  const toSettingsPage = useNavigate()

  return (
    <div>
      <button onClick={() => toSettingsPage('/profile/profileSettings')}>
        Take us to Profile Settings
      </button>
    </div>
  )
}

export default MyProfile
