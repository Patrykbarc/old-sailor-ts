import { Button } from "@/components/ui/Button/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/Card"
import { Wrapper } from "@/components/ui/Wrapper/Wrapper"
import Link from "next/link"

export function ContactCTA() {
  return (
    <footer className="my-24">
      <Wrapper variant="narrow">
        <Card className="text-center border-neutral-300 bg-neutral-900 border-2 md:min-w-full md:px-16 py-8">
          <CardHeader className="grid gap-2 mb-6 uppercase">
            <CardTitle className="text-4xl md:text-5xl font-bold text-primary">
              do you have questions?
            </CardTitle>
            <CardDescription className="text:lg md:text-2xl text-neutral-200 font-semibold">
              we&apos;ll be happt to answer them!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/contact">
              <Button size="xl" variant="cta">
                Message us
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Wrapper>
    </footer>
  )
}
