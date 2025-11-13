import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <>
      <style>
        {`
          #contact {
            background-image: url(/images/footerbanner_mobile.png);
          }
          @media (min-width: 768px) {
            #contact {
              background-image: url(/images/footerbanner.png);
            }
          }
        `}
      </style>
      <section
        id="contact"
        className="relative w-full h-[550px] bg-cover bg-center flex items-center"
      >
      {/* Overlay gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

      {/* Text Content */}
      <div className="relative z-10 pl-6 md:pl-20 text-white max-w-xl space-y-6">
        <h2 className="text-4xl md:text-4xl font-playfair font-bold leading-tight">
          LET’S CONNECT <br />
          <span className="text-[#99cc33]">We’d love to hear from you.
</span>
        </h2>

        <p className="text-lg font-poppins text-gray-100 leading-relaxed">
          For partnerships, collaborations, or distribution opportunities,
          <span className="italic">reach out at +91 9999610690</span><br />
        </p>

<p className="text-lg font-poppins text-gray-100 leading-relaxed">
          Whether you’re a retailer, distributor, HoReCa partner, or simply someone who loves good drinks —

          <span className="italic"> we’re always open to building connections that fizz with potential.</span><br />
        </p>

        <ul className="space-y-3 text-gray-100 font-poppins">
          <li className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#99cc33]" />
            <span>hello@guptajikishikanji.in</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#99cc33]" />
            <span>+91 9999610690</span>
          </li>
          <li className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#99cc33]" />
            <span>Delhi, India</span>
          </li>
          <li className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-[#99cc33]" />
            <span>WhatsApp Available</span>
          </li>
        </ul>

        {/* <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white font-poppins font-semibold px-8 py-6 text-base rounded-lg shadow-lg transition-all duration-300"
        >
          Contact Us
        </Button> */}
      </div>
    </section>
    </>
  );
};

export default CTASection;
