import { ContactForm } from "./components/contact-form";
import { TypographyH1 } from "./typography/H1";
import { TypographyP } from "./typography/P";
import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "../(portfolio)/components/navbar";

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
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6 text-orange-400" />
              <span>Phone: +1 234 567 890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-6 h-6 text-orange-400" />
              <span>Email: contact@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-orange-400" />
              <span>Address: 123 Main St, City</span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
