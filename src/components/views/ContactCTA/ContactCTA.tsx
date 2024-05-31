import { Button } from '@/components/ui/Button/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/Card/Card'
import { Wrapper } from '@/components/ui/Wrapper/Wrapper'

export function ContactCTA() {
	return (
		<Wrapper>
			<Card className='text-center mb-36 border border-neutral-300 bg-neutral-900  min-w-full px-16 py-8'>
				<CardHeader className='grid gap-2 mb-6'>
					<CardTitle className='text-5xl font-bold text-primary'>
						DO YOU HAVE QUESTIONS?
					</CardTitle>
					<CardDescription className='text-2xl text-neutral-200 font-semibold'>
						WE&apos;LL BE HAPPY TO ANSWER THEM!
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Button size='xl' variant='cta'>
						Message us
					</Button>
				</CardContent>
			</Card>
		</Wrapper>
	)
}
