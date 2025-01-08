import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import HouseIcon from '@mui/icons-material/House'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'
import SchoolIcon from '@mui/icons-material/School'
import AddReactionIcon from '@mui/icons-material/AddReaction'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import SavingsIcon from '@mui/icons-material/Savings'

export const TOKEN_KEY = 'token-app-finance'
export const USER_NAME = 'name-app-finance'

export const category = {
  1: {
    name: 'Salário e Receitas',
    icon: <LocalAtmIcon />,
  },
  2: {
    name: 'Moradia',
    icon: <HouseIcon />,
  },
  3: {
    name: 'Alimentação',
    icon: <FastfoodIcon />,
  },
  4: {
    name: 'Transporte',
    icon: <DirectionsCarIcon />,
  },
  5: {
    name: 'Saúde',
    icon: <MedicalServicesIcon />,
  },
  6: {
    name: 'Educação',
    icon: <SchoolIcon />,
  },
  7: {
    name: 'Lazer',
    icon: <AddReactionIcon />,
  },
  8: {
    name: 'Investimentos',
    icon: <SavingsIcon />,
  },
  9: {
    name: 'Outros',
    icon: <AccountBalanceWalletIcon />,
  },
}

export const categorys = [
  {
    id: 1,
    name: 'Salário e Receitas',
    icon: <LocalAtmIcon />,
  },
  { id: 2, name: 'Moradia', icon: <HouseIcon /> },
  { id: 3, name: 'Alimentação', icon: <FastfoodIcon /> },
  { id: 4, name: 'Transporte', icon: <DirectionsCarIcon /> },
  {
    id: 5,
    name: 'Saúde',
    icon: <MedicalServicesIcon />,
  },
  { id: 6, name: 'Educação', icon: <SchoolIcon /> },
  { id: 7, name: 'Lazer', icon: <AddReactionIcon /> },
  { id: 8, name: 'Investimentos', icon: <SavingsIcon /> },
  {
    id: 9,
    name: 'Outros',
    icon: <AccountBalanceWalletIcon />,
  },
]

export const colors = {
  success: '#4caf50',
  warning: '#ff9800',
  error: '#f44336',
}

export const arrayStatus = [
  {
    name: 'Pago',
    color: 'success',
  },
  {
    name: 'Pendente',
    color: 'warning',
  },
  {
    name: 'Atrasado',
    color: 'error',
  },
]

export const status = {
  Pago: {
    name: 'Pago',
    color: 'success',
  },
  Pendente: {
    name: 'Pendente',
    color: 'warning',
  },
  Atrasado: {
    name: 'Atrasado',
    color: 'error',
  },
}
