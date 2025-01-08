import React from 'react'
import { TextField, Button, Typography, Container, Box, Paper, Avatar, CircularProgress } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useCreateAccount from './useCreateAccount'

export default function CreateAccount() {
  const {
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
  } = useCreateAccount()

  const isFormInvalid = !name || !email || !password || password !== confirmPassword

  return (
    <Box
      className={'container-create-account'}
      sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 3 }}>
          <Box display="flex" justifyContent="center" mb={2}>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
          </Box>
          <Typography variant="h5" align="center" gutterBottom>
            Criar Conta
          </Typography>
          <div>
            <TextField
              fullWidth
              label="UserName"
              variant="outlined"
              margin="normal"
              required
              value={name}
              onChange={e => {
                const valueWithoutSpaces = e.target.value.replace(/\s+/g, '')
                setName(valueWithoutSpaces)
              }}
              error={/\s/.test(name)}
              helperText={/\s/.test(name) ? 'Espaços não são permitidos!' : ''}
            />
            <TextField
              fullWidth
              label="E-mail"
              variant="outlined"
              margin="normal"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label="Senha"
              type="password"
              variant="outlined"
              margin="normal"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <TextField
              fullWidth
              label="Repita a Senha"
              type="password"
              variant="outlined"
              margin="normal"
              required
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              error={password !== confirmPassword && confirmPassword.length > 0}
              helperText={password !== confirmPassword && confirmPassword.length > 0 ? 'As senhas não coincidem' : ''}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading || isFormInvalid}
              sx={{ marginTop: 2 }}
              onClick={handleSubmit}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Cadastrar Conta'}
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              disabled={loading}
              sx={{ marginTop: 2 }}
              onClick={redirectToLogin}
            >
              Login
            </Button>
          </div>
        </Paper>
        <ToastContainer />
      </Container>
    </Box>
  )
}
