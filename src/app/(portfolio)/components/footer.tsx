import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import LaunchUI from "@/components/logos/launch-ui";
import { ReactNode } from "react";
import { ContactForm } from "@/components/contact-form";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
}

export default function FooterSection({
  logo = <LaunchUI />,
  name = "Portfolio",
  columns = [
    {
      title: "Links",
      links: [
        { text: "Home", href: "/" },
        { text: "About-at", href: "/about-at" },
        { text: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Staff",
      links: [
        { text: "Sara", href: "/contact" },
        { text: "German", href: "/contact" },
        { text: "Luciano", href: "/contact" },
        { text: "Mauro", href: "/contact" },
        { text: "Santiago", href: "/contact" },
      ],
    },

  ],
  copyright = "© 2025 Portfolio fullstack developers. All rights reserved",
  policies = [
  ],
}: FooterProps) {
  return (
    <footer className="bg-background w-full px-4">
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn>
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
            <FooterColumn className="flex justify-center items-center">
              <ContactForm />
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
