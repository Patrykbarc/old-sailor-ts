const linkHref = '/store/products'

export const storeNavLinks = [
  {
    name: 'Home',
    href: `/`,
  },
  {
    name: 'All products',
    href: `${linkHref}?category=all`,
  },
  {
    name: 'Cosmetics',
    href: `${linkHref}?category=cosmetics`,
  },
  {
    name: 'Alcohols',
    href: `${linkHref}?category=alcohols`,
  },
]
