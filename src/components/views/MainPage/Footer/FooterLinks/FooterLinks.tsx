import { NavLinks } from "@/components/ui/NavLinks/NavLinks";
import Link from "next/link";

export function FooterLinks() {
  return (
    <div className="flex flex-col md:flex-row text-center md:gap-3 text-lg">
      <Link
        className="hover:text-primary transition-colors capitalize"
        href="/privacy-policy"
      >
        privacy policy
      </Link>
      <NavLinks linkHighlight={false} />
    </div>
  )
}
