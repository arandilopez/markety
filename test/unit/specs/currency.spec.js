import currencyMixin from '@/mixins/currency'
const currency = currencyMixin.filters.currency

describe('currency.js', () => {
  it('should return a empty string when passing a null', () => {
    expect(currency(null)).to.equal('')
  })

  it('should a formated currency string when passing a string with numbers', () => {
    expect(currency('24')).to.equal('$24.00')
  })

  it('should a formated currency string when passing a number', () => {
    expect(currency(24)).to.equal('$24.00')
  })
})
