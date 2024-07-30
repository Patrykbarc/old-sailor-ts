import { ROUTES } from './_routes'

const linkHref = '/store/products'

export const STORE_NAV_LINKS = [
  {
    name: ROUTES.home,
    href: `/`,
  },
  {
    name: ROUTES.allProducts,
    href: `${linkHref}?category=all`,
  },
  {
    name: ROUTES.cosmetics,
    href: `${linkHref}?category=cosmetics`,
  },
  {
    name: ROUTES.alcohols,
    href: `${linkHref}?category=alcohols`,
  },
]
