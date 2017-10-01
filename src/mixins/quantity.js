export default {
  filters: {
    qty_unit (value, unit = '') {
      if (value === null || value === undefined) return ''
      return `${(Number(value)).toLocaleString()} ${unit}`
    }
  }
}
