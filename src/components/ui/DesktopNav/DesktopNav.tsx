'use client'

import { NavLinks } from '../NavLinks/NavLinks'
import LOGO from '../../../../public/old-sailor-logo-horizontal.png'
import Image from 'next/image'
import Link from 'next/link'
import { Wrapper } from '@/components/ui/Wrapper/Wrapper'
import { useEffect, useState } from 'react'
import { NavigationProps } from '@/lib/types/types'

export function DesktopNav({ className }: NavigationProps) {
	const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		function handleScroll() {
			const currentScrollPos = window.scrollY
			setVisible(prevScrollPos > currentScrollPos)
			setPrevScrollPos(currentScrollPos)
		}
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [prevScrollPos])

	return (
		<nav
			className={`fixed z-10 w-full py-5 shadow-xl backdrop-blur-md lg:block transition-all duration-500 ${className} ${
				visible ? 'top-0' : '-top-full'
			}`}>
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
