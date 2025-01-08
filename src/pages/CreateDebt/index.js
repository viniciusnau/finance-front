import React, { useEffect } from 'react'
import TableFine from '../../components/Table'
import './createDebt.css'

import { Button, Chip, TextField } from '@mui/material'
import ModalFormDebt from '../../components/ModalFormDebt'
import useCreateDebt from '../../hooks/useCreateDebt'
import { arrayStatus } from '../../utils/constants'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

const CreateDebt = () => {
  const {
    results,
    count,
    createDebt,
    updateDebt,
    getAllDebt,
    deleteDebt,
    setStartDate,
    setEndDate,
    setPage,
    page,
    setSearch,
    search,
    setStatus,
    status,
  } = useCreateDebt()

  useEffect(() => {
    getAllDebt()
    // eslint-disable-next-line
  }, [page])

  const handleSearch = () => {
    setPage(1)
    getAllDebt()
  }

  return (
    <div className={'container-create-debt'}>
      <div className={'header-create-debt'}>
        <TextField
          label="Pesquisar"
          variant="outlined"
          size="small"
          value={search}
          onChange={e => setSearch(e.target.value)}
          sx={{ marginRight: 2, width: '30%' }}
        />
        <TextField
          select
          label="Status"
          value={status}
          margin="dense"
          size="small"
          sx={{ marginRight: 2, width: 150 }}
          onChange={e => setStatus(e.target.value)}
        >
          <MenuItem value={'Todos'}>
            <Typography sx={{ display: 'flex', gap: 0 }}>
              <Chip label={'Todos'} variant="outlined" size="small" />
            </Typography>
          </MenuItem>
          {arrayStatus.map(option => (
            <MenuItem key={option.id} value={option.name}>
              <Typography sx={{ display: 'flex', gap: 2 }}>
                <Chip label={option.name} color={option.color} variant="outlined" size="small" />
              </Typography>
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Data Início"
          type="date"
          onChange={e => setStartDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          size="small"
          sx={{ marginRight: 2 }}
        />

        <TextField
          label="Data Fim"
          type="date"
          onChange={e => setEndDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          size="small"
          sx={{ marginRight: 2 }}
        />

        <Button variant="contained" color="secondary" onClick={handleSearch} sx={{ marginRight: 2 }}>
          Pesquisar
        </Button>
        <ModalFormDebt isCreate createDebt={createDebt} />
      </div>
      <TableFine
        results={results}
        count={count}
        updateDebt={updateDebt}
        deleteDebt={deleteDebt}
        setPage={setPage}
        page={page}
      />
    </div>
  )
}

export default CreateDebt
