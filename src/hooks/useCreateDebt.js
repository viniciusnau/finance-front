import api from '../services/api'
import { useState } from 'react'
import { toast } from 'react-toastify'

const useCreateDebt = () => {
  const [status, setStatus] = useState('Todos')
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0)
  const [results, setResults] = useState([])
  const [startDate, setStartDate] = useState('1900-01-01')
  const [endDate, setEndDate] = useState('2100-01-01')

  const getAllDebt = async () => {
    try {
      setLoading(true)
      const newStatus = status === 'Todos' ? '' : status
      const { data } = await api.get(
        `bills/debts/?start_date=${startDate}&end_date=${endDate}&page=${page}&search=${search}&status=${newStatus}`
      )
      setCount(data.count)
      setResults(data.results)
      setSearch('')
    } catch (error) {
      console.error('Error on get all debt', error)
    } finally {
      setLoading(false)
    }
  }

  const createDebt = async data => {
    try {
      setLoading(true)
      await api.post('bills/debts/', data)
      await getAllDebt()
      toast.success('Débito criado com sucesso!')
    } catch (error) {
      toast.error('Erro ao criar débito!')
      console.error('Error on create debt', error)
    } finally {
      setLoading(false)
    }
  }

  const updateDebt = async (id, data) => {
    try {
      setLoading(true)
      await api.patch(`bills/debts/${id}/`, data)
      await getAllDebt()
      toast.success('Débito atualizado com sucesso!')
    } catch (error) {
      toast.error('Erro ao atualizar débito!')
      console.error('Error on update debt', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteDebt = async id => {
    try {
      setLoading(true)
      await api.delete(`bills/debts/${id}/`)
      await getAllDebt()
      toast.success('Débito excluído com sucesso!')
    } catch (error) {
      toast.error('Erro ao excluir débito!')
      console.error('Error on delete debt', error)
    } finally {
      setLoading(false)
    }
  }

  return {
    results,
    loading,
    count,
    createDebt,
    updateDebt,
    getAllDebt,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    setPage,
    setSearch,
    search,
    page,
    setStatus,
    status,
    deleteDebt,
  }
}

export default useCreateDebt
