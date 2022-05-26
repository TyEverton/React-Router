import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import MyProfile from './My-Profile'
import ProfileSettings from './Profile-Settings'
import GeneralProfile from './General-Profile'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='profile'>
          <Route index element={<Profile />} />
          <Route path='myProfile' element={<MyProfile />} />
          <Route path='profileSettings' element={<ProfileSettings />} />
          <Route path=':userId' element={<GeneralProfile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
