import React from 'react'
import { TextField, Button, Typography, Container, Box, Paper, Avatar, CircularProgress } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { ToastContainer } from 'react-toastify'
import './Login.css'
import 'react-toastify/dist/ReactToastify.css'
import useLogin from './useLogin'

export default function Login() {
  const { userName, setUserName, password, setPassword, loading, redirectToCreateAccount, handleSubmit } = useLogin()

  return (
    <Box className={'container-login'}>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 3 }}>
          <Box display="flex" justifyContent="center" mb={2}>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
          </Box>
          <Typography variant="h5" align="center" gutterBottom>
            Acessar conta
          </Typography>
          <div>
            <TextField
              fullWidth
              label="UserName"
              variant="outlined"
              margin="normal"
              required
              value={userName}
              onChange={e => setUserName(e.target.value)}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
              sx={{ marginTop: 2 }}
              onClick={handleSubmit}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Entrar'}
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={redirectToCreateAccount}
            >
              Criar Conta
            </Button>
          </div>
        </Paper>
        <ToastContainer />
      </Container>
    </Box>
  )
}
