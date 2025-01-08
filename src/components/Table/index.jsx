import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { category, status } from '../../utils/constants'
import Typography from '@mui/material/Typography'
import { Box, Chip, Fab, Pagination } from '@mui/material'
import { formatCurrency } from '../../utils/formatCurrency'
import ModalEditCount from '../ModalFormDebt'
import { formatDate } from '../../utils/formatDate'

export default function TableFine({ results, count, updateDebt, deleteDebt, setPage, page }) {
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  return (
    <TableContainer component={Paper} sx={{ minWidth: 650 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '50px' }}>Categoria</TableCell>
            <TableCell sx={{ width: '100px' }}>Data</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell sx={{ width: '100px' }}>Valor</TableCell>
            <TableCell align="center" sx={{ width: '100px' }}>
              Status
            </TableCell>
            <TableCell sx={{ width: '50px' }}>Editar</TableCell>
            <TableCell sx={{ width: '50px' }}>Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results?.length > 0 ? (
            results?.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center" sx={{ width: '50px' }}>
                  {category[row?.category || 1]?.icon}
                </TableCell>
                <TableCell>{formatDate(row.due_date)}</TableCell>
                <TableCell>
                  <Typography variant="subtitle1" gutterBottom>
                    <b>{row.title}</b>
                  </Typography>
                  <Typography variant="body2">{row.notes}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">
                    <b>{formatCurrency(row.amount)}</b>
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Chip label={status[row.status]?.name} color={status[row.status]?.color} variant="outlined" />
                </TableCell>
                <TableCell>
                  <ModalEditCount row={row} updateDebt={updateDebt} />
                </TableCell>
                <TableCell>
                  <IconButton aria-label="delete" onClick={() => deleteDebt(row.id)}>
                    <Fab color="error" size="small">
                      <DeleteIcon />
                    </Fab>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} align="center">
                <Typography variant="h6" color="textSecondary" sx={{ padding: 3 }}>
                  Nenhum registro encontrado.
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {results?.length > 0 && (
        <Box sx={{ display: 'flex', margin: 2, justifyContent: 'flex-end' }}>
          <Pagination count={Math.ceil(count / 10)} page={page} onChange={handleChangePage} />
        </Box>
      )}
    </TableContainer>
  )
}
