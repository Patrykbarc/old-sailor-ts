import { DesktopNav } from '@/components/ui/DesktopNav/DesktopNav'
import { MobileNav } from '@/components/ui/MobileNav/MobileNav'

export function Navigation() {
	return (
		<>
			<MobileNav className='lg:hidden' />
			<DesktopNav className='hidden lg:block' />
		</>
	)
}
