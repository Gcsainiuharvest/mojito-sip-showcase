import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Leaf, Sparkles } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const HeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // EmailJS configuration - Replace these with your actual values from emailjs.com
      const serviceId = 'service_w85snel'; // Get from EmailJS dashboard
      const templateId = 'template_emqzvkf'; // Create email template in EmailJS
      const publicKey = 'jKks5BrnyBg2B8IOc'; // Get from EmailJS dashboard

      // Prepare email parameters
      const templateParams = {
        name: formData.name,
        client_email: formData.email,
        phone: formData.phone,
        message: formData.message || 'No message provided',
        email: 'guptajikimojito@gmail.com',
      };

      // Send email
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      alert('Order submitted successfully! We will contact you soon.');
      setIsDialogOpen(false);
      // Reset form
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Failed to submit order. Please try again or contact us directly.');
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/HeaderMobile_2.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/images/HeaderDesktop3.mp4" type="video/mp4" media="(min-width: 768px)" />
        </video>
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
            <Leaf className="w-4 h-4 text-primary-glow" />
            <span className="text-sm font-poppins font-medium text-primary-foreground">
              Fresh Mojito
            </span>
          </div>

          <h1 className="mb-6 text-5xl md:text-7xl font-playfair font-black text-primary-foreground leading-tight">
            <span className="block">Café Wala Mojito,</span>
            <span className="block italic bg-gradient-fresh bg-clip-text text-primary-foreground" style={{paddingTop:14}}>
               Ab Sirf ₹10 Mein!
            </span>
          </h1>

          <p className="mb-8 text-lg md:text-xl text-primary-foreground/90 font-poppins font-light max-w-2xl mx-auto">
           The taste you loved at cafés - now bottled, chilled, and ready to sip anytime
            {/* <span className="block mt-2 font-medium"> Meet the Flavours.</span> */}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary-glow text-primary-foreground font-poppins font-semibold px-8 py-6 text-lg shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Order Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Order Mojito</DialogTitle>
                  <DialogDescription>
                    Fill in your details to place your order. We'll get back to you soon!
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="col-span-3"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="phone" className="text-right">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="col-span-3"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="col-span-3"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="message" className="text-right">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="col-span-3"
                        placeholder="Optional message..."
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Submit Order</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-slide-in" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
