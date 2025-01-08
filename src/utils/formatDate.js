import { format, parseISO } from 'date-fns'

export const formatDate = dateString => {
  const parsedDate = parseISO(dateString)
  return format(parsedDate, 'dd/MM/yyyy')
}

export const formatDateYYMMDD = date => {
  return format(new Date(date), 'yyyy-MM-dd')
}
