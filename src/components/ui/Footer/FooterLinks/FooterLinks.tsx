import { NavLinks } from '@/components/ui/NavLinks/NavLinks'
import { FOOTER_LNIKS } from '@/lib/constants/links/footer-links'

export function FooterLinks() {
  return (
    <div className="flex flex-col md:flex-row text-center md:gap-3 text-lg">
      <NavLinks links={FOOTER_LNIKS} linkHighlight={false} />
    </div>
  )
}
