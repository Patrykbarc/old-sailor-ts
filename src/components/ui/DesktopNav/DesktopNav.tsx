'use client'

import { NavLinks } from '../NavLinks/NavLinks'
import LOGO from '../../../../public/old-sailor-logo-horizontal.png'
import Image from 'next/image'
import Link from 'next/link'
import { Wrapper } from '@/components/ui/Wrapper/Wrapper'
import { useEffect, useState } from 'react'
import { NavigationProps } from '@/lib/types/types'

const navStyles =
	'fixed z-10 w-full hover:opacity-100 hover:py-5 duration-500 ease-in-out lg:block transition-all backdrop-blur-md'
const visibleNavStyles = 'opacity-100 py-5 shadow-xl'
const notVisibleNavStyles = 'opacity-85 py-2'

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

	// TODO: make navlinks padding more user-friendly

	return (
		<nav
			className={` ${navStyles} ${className} ${
				visible ? visibleNavStyles : notVisibleNavStyles
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
