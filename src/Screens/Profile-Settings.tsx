import { useNavigate } from 'react-router-dom'
function ProfileSettings() {
  const backToHome = useNavigate()

  const backToHomeButton = () => {
    backToHome('/', { replace: true })
  }

  return (
    <div>
      <button onClick={backToHomeButton}>Back to Home Page</button>
    </div>
  )
}

export default ProfileSettings
