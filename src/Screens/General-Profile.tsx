import { useParams } from 'react-router-dom'

function GeneralProfile() {
  let { userId } = useParams()

  return <div>{userId}</div>
}

export default GeneralProfile
