import { NavLinks } from '../../ui/NavLinks/NavLinks'
import LOGO from '../../../../public/old-sailor-logo-horizontal.png'
import Image from 'next/image'
import Link from 'next/link'
import { Wrapper } from '@/components/ui/Wrapper/Wrapper'

export function DesktopNav() {
	return (
		<nav className='fixed top-0 z-10 hidden w-full py-5 shadow-xl backdrop-blur-md lg:block'>
			<Wrapper className='justify-between flex-col md:flex-row mx-auto items-center'>
				<Link href={'/'}>
					<Image alt='Old Sailor Barber logo' src={LOGO} />
				</Link>
				<div className='flex gap-3'>
					<NavLinks className='text-lg' />
				</div>
				<a className='text-primary hover:text-primary-foreground' href='tel:+48100200300'>
					+48 100 200 300
				</a>
			</Wrapper>
		</nav>
	)
}
