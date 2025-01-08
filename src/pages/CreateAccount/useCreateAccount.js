import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

const useCreateAccount = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  const handleSubmit = async () => {
    if (!name || !email || !password || !confirmPassword) {
      toast.error('Por favor, preencha todos os campos!')
      return
    }

    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem!')
      return
    }

    setLoading(true)

    try {
      await api.post('authorizer/register/', {
        username: name,
        email,
        password,
        confirm_password: confirmPassword,
      })
      toast.success('Conta criada com sucesso!')
      history('/login')
    } catch (error) {
      toast.error('Erro ao criar conta. Tente novamente!')
    } finally {
      setLoading(false)
    }
  }
  const redirectToLogin = () => {
    history('/login')
  }

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    handleSubmit,
    redirectToLogin,
  }
}

export default useCreateAccount
