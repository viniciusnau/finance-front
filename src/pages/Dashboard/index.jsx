import React from 'react'
import { Box, Typography, Paper } from '@mui/material'
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts'
import useDashboard from './useDashboard'

const COLORS = ['#4caf50', '#ff9800', '#f44336']

export default function Dashboard() {
  const { dashboardData } = useDashboard()

  if (!dashboardData) {
    return (
      <Box sx={{ padding: 4 }}>
        <Typography variant="h6">Carregando dados...</Typography>
      </Box>
    )
  }

  const pieChartData = [
    { name: 'Pagos', value: dashboardData.total_paid_debts },
    { name: 'Pendentes', value: dashboardData.total_pending_debts },
    { name: 'Atrasados', value: dashboardData.total_overdue_debts },
  ]

  const barChartData = [
    {
      name: 'Comparativo de Dívidas',
      Pagos: dashboardData.total_paid_debts_sum,
      Pendentes: dashboardData.total_pending_debts_sum,
      Atrasados: dashboardData.total_overdue_debts_sum,
    },
  ]

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Financeira
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, marginBottom: 4 }}>
        <Paper elevation={3} sx={{ padding: 2, width: '100%' }}>
          <Typography variant="h6">Total de Dívidas</Typography>
          <Typography variant="h4">{dashboardData.total_debts}</Typography>
        </Paper>

        <Paper elevation={3} sx={{ padding: 2, width: '100%' }}>
          <Typography variant="h6">Valor Total de Dívidas</Typography>
          <Typography variant="h4">R$ {dashboardData.total_debts_amount_sum.toFixed(2)}</Typography>
        </Paper>
      </Box>

      <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
        <Paper elevation={3} sx={{ padding: 2, width: '50%' }}>
          <Typography variant="h6" gutterBottom>
            Status das Dívidas
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieChartData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Paper>

        {/* Gráfico de Barras - Comparação de Valores */}
        <Paper elevation={3} sx={{ padding: 2, width: '50%' }}>
          <Typography variant="h6" gutterBottom>
            Comparativo de Valores por Status
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Pagos" fill="#4caf50" />
              <Bar dataKey="Pendentes" fill="#ff9800" />
              <Bar dataKey="Atrasados" fill="#f44336" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Box>
    </Box>
  )
}
