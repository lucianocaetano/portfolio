import { ContactForm } from "./components/contact-form";
import { TypographyH1 } from "./typography/H1";
import { TypographyP } from "./typography/P";
import Navbar from "../(portfolio)/components/navbar";
import Image from "next/image";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="px-6 w-full max-w-7xl mx-auto max-md:flex-col flex justify-between my-16 md:px-16">
        <div>
          <TypographyH1>Contact Us</TypographyH1>
          <TypographyP>Feel free to reach out to us!</TypographyP>
          <br />
          <div className="flex flex-col gap-4">
            <Image src="/contact_dark.jpg" width={260} height={100} alt="contact" className="hidden dark:block" />
            <Image src="/contact.jpg" width={260} height={100} alt="contact" className="block dark:hidden pt-[0.9px]"/>
          </div>
        </div>
        <ContactForm />
      </div>
      </div>
  );
};

export default ContactPage;
