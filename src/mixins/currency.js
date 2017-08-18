export default {
  filters: {
    currency (value, currency = 'USD') {
      if (value === null || value === undefined) return ''
      return (Number(value)).toLocaleString('en-US', {
        style: 'currency',
        currency: currency
      })
    }
  }
}
