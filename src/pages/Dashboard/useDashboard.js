import { useEffect, useState } from 'react'
import api from '../../services/api'

const useDashboard = () => {
  const [dashboardData, setDashboardData] = useState(null)
  const getDashboardData = async () => {
    try {
      const { data } = await api.get('bills/me/')
      setDashboardData(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getDashboardData()
  }, [])
  return {
    dashboardData,
  }
}
export default useDashboard
