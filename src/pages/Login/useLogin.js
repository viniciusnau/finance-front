import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import api, { defaultsHeadersAxios } from '../../services/api'
import { setItem } from '../../utils/persistenceUtils'
import { TOKEN_KEY, USER_NAME } from '../../utils/constants'

const UseLogin = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const history = useNavigate()
  const handleSubmit = async () => {
    setLoading(true)
    setError(null)

    try {
      const { data } = await api.post('authorizer/login/', { username: userName, password })
      await defaultsHeadersAxios(data.token)
      await setItem(TOKEN_KEY, data.token)
      await setItem(USER_NAME, data?.username)
      toast.success('Login realizado com sucesso!')
      history('/dashboard')
    } catch (error) {
      toast.error('Erro ao realizar login!')
      setError(error)
    }

    setLoading(false)
  }

  const redirectToCreateAccount = () => {
    history('/criar-conta')
  }

  return {
    userName,
    setUserName,
    password,
    setPassword,
    loading,
    error,
    handleSubmit,
    redirectToCreateAccount,
  }
}
export default UseLogin
