export type Currency = 'USD' | 'EUR' | 'PLN'

const localeMap: { [key in Currency]: string } = {
  USD: 'en-US',
  EUR: 'de-DE',
  PLN: 'pl-PL',
}

export function formatPrice(
  number: number,
  currency: Currency = 'EUR'
): string {
  const locale = localeMap[currency]
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(number)
}
