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
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 pl-6 md:pl-20 text-white max-w-xl space-y-6">
        <h2 className="text-4xl md:text-4xl font-playfair font-bold leading-tight">
         
          <span className="text-[#99cc33]">Let’s Keep the Chill Flowing.

</span>
        </h2>

        <p className="text-lg font-poppins text-gray-100 leading-relaxed">
         For partnerships, collaborations, or distribution —

          <span className="italic"> connect with the team behind your favourite ₹10 refresher.</span><br />
        </p>
        <ul className="space-y-3 text-gray-100 font-poppins">
          <li className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#99cc33]" />
            <span> guptaji@uharvest.in</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#99cc33]" />
            <span>+91 88266 63762</span>
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
