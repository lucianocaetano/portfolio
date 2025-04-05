import { ContactForm } from "@/app/contact/components/contact-form";
import { TypographyH1 } from "@/app/contact/typography/H1";
import Navbar from "@/app/(portfolio)/components/navbar";
import { TypographyP } from "@/app/contact/typography/P";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Navbar en la parte superior */}
      <div className="mt-4 px-12"> {/* Espaciado debajo del Navbar */}
        <TypographyH1>Contact Us</TypographyH1> {/* Título principal */}
        <TypographyP>Feel free to reach out to us!</TypographyP>
        <br />

        {/* Información de contacto con íconos y texto */}
        <div className="flex flex-col gap-4 mt-4">
          {/* Teléfono */}
          <div className="flex items-center gap-2">
            <Phone className="w-6 h-6 text-orange-400" />
            <span>Phone: +1 234 567 890</span>
          </div>

          {/* Correo electrónico */}
          <div className="flex items-center gap-2">
            <Mail className="w-6 h-6 text-orange-400" />
            <span>Email: contact@example.com</span>
          </div>

          {/* Dirección */}
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-orange-400" />
            <span>Address: 123 Main St, City</span>
          </div>
        </div>

        {/* Contenedor centrado para el formulario */}
        <div className="mt-8 flex justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
