import { DesktopNav } from '@/components/ui/_MainPage/DesktopNav/DesktopNav'
import { MobileNav } from '@/components/ui/_MainPage/MobileNav/MobileNav'

export function Navigation() {
  return (
    <div className="relative z-50">
      <MobileNav className="lg:hidden" />
      <DesktopNav className="hidden lg:block" />
    </div>
  )
}
