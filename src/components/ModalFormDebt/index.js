import * as React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import { Chip, Fab, TextField } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import MenuItem from '@mui/material/MenuItem'
import { arrayStatus, categorys } from '../../utils/constants'
import { currencyToNumber, formatCurrencyMack } from '../../utils/formatCurrency'

import AddIcon from '@mui/icons-material/Add'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export default function ModalFormDebt({ row, isCreate, createDebt, updateDebt }) {
  const [title, setTitle] = useState(row?.title)
  const [notes, setNotes] = useState(row?.notes)
  const [due_date, setDueDate] = useState(row?.due_date || new Date().toISOString().split('T')[0])
  const [category, setCategory] = useState(row?.category || 1)
  const [amount, setAmount] = useState(row?.amount ? formatCurrencyMack(row?.amount || 0) : 0)
  const [status, setStatus] = useState(row?.status)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const clearFields = () => {
    setTitle('')
    setNotes('')
    setDueDate(new Date().toISOString().split('T')[0])
    setCategory(1)
    setAmount(0)
    setStatus('')
  }

  const handleCreateDebt = () => {
    if (!isCreate && updateDebt) {
      updateDebt(row?.id, {
        title,
        notes,
        due_date,
        category,
        amount: currencyToNumber(amount).toString(),
        status,
      })
    } else {
      createDebt({ title, notes, due_date: due_date, category, amount: currencyToNumber(amount).toString(), status })
    }
    clearFields()
    handleClose()
  }

  const isDisabled = !amount || !title || !status

  return (
    <React.Fragment>
      {isCreate ? (
        <Button
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
          sx={{ width: 250 }}
        >
          Criar Débito
        </Button>
      ) : (
        <IconButton aria-label="edit" color="primary" onClick={handleClickOpen}>
          <Fab color="primary" size="small">
            <EditIcon />
          </Fab>
        </IconButton>
      )}

      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {isCreate ? 'Criar Débito' : 'Editar Conta'}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={theme => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <TextField
            id="outlined-basic"
            label="Titulo"
            variant="outlined"
            fullWidth
            margin="dense"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Valor"
            variant="outlined"
            fullWidth
            margin="dense"
            value={amount}
            onChange={e => setAmount(formatCurrencyMack(e.target.value))}
          />
          <TextField
            type="date"
            id="outlined-basic"
            label="Data de Vencimento"
            onChange={e => setDueDate(e.target.value)}
            variant="outlined"
            fullWidth
            margin="dense"
            value={due_date}
          />
          <TextField
            id="filled-multiline-flexible"
            label="Descrição"
            multiline
            maxRows={4}
            defaultValue={notes}
            onChange={e => setNotes(e.target.value)}
            value={notes}
            variant="outlined"
            margin="dense"
            fullWidth
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Status"
            value={status}
            margin="dense"
            onChange={e => setStatus(e.target.value)}
            fullWidth
          >
            {arrayStatus.map(option => (
              <MenuItem key={option.id} value={option.name}>
                <Typography sx={{ display: 'flex', gap: 2 }}>
                  <Chip label={option.name} color={option.color} variant="outlined" />
                </Typography>
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Categoria"
            value={category}
            margin="dense"
            fullWidth
            onChange={e => setCategory(e.target.value)}
          >
            {categorys.map(option => (
              <MenuItem key={option.id} value={option.id}>
                <Typography sx={{ display: 'flex', gap: 2 }}>
                  {option.icon} {option.name}
                </Typography>
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button autoFocus onClick={handleCreateDebt} disabled={isDisabled}>
            {isCreate ? 'Criar Débito' : 'Editar Débito'}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  )
}
