export const formatCurrency = value => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
export const currencyToNumber = value => {
  const cleanValue = value?.replace(/[^\d,]/g, '').replace(',', '.') || 0
  return parseFloat(cleanValue)
}

export const formatCurrencyMack = value => {
  const number = value?.replace(/\D/g, '') || 0
  return `R$ ${Number(number / 100)
    .toFixed(2)
    .replace('.', ',')}`
}
