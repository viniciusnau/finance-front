import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TOKEN_KEY } from '../../utils/constants'

const Logout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY)
    navigate('/login')
  }
  useEffect(() => {
    handleLogout()
    // eslint-disable-next-line
  }, [])
  return null
}

export default Logout
