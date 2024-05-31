'use client'

import { Wrapper } from '@/components/ui/Wrapper/Wrapper'
import { footerLinks } from '@/lib/constants/footerLinks'
import { Separator } from '@radix-ui/react-separator'
import Image from 'next/image'
import Link from 'next/link'
import LOGO from '../../../../public/old-sailor-logo-vertical.png'

export function Footer() {
	return (
		<footer className='w-full bg-neutral-950 py-8'>
			<Wrapper className='justify-between flex-col md:flex-row mx-auto items-center'>
				<Image
					className='h-fit mb-8 md:mb-0'
					height={92}
					width={107}
					src={LOGO}
					alt='Old Sailor Barber logo'
				/>
				<div className='flex flex-col gap-2'>
					<div className='flex flex-col md:flex-row text-center md:gap-3 text-lg'>
						{footerLinks.map(link => {
							return (
								<ul key={link.name}>
									<li className='hover:text-primary transition-colors capitalize'>
										<Link href={link.href}>{link.name}</Link>
									</li>
								</ul>
							)
						})}
					</div>
					<Separator className='my-3 md:my-0.5 bg-neutral-800 w-full h-[1px]' />
					<div className='flex flex-col text-center md:text-end text-sm'>
						<p>Parkside Street 41</p>
						<p>+48 100 200 300</p>
						<p>old.sailor@barber.com</p>
					</div>
				</div>
			</Wrapper>
			<div className='flex flex-col text-center w-full mt-5 text-neutral-600'>
				<small>© 2024 | The Old Sailor Barber</small>
				<small>Designed & developed by Patryk Barć</small>
			</div>
		</footer>
	)
}
