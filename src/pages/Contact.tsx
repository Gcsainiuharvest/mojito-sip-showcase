import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    fullAddress: "",
    city: "",
    state: "",
    pincode: "",
    contactNumber: "",
    interestedIn: "",
    currentBusiness: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("fullAddress", formData.fullAddress);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("state", formData.state);
      formDataToSend.append("pincode", formData.pincode);
      formDataToSend.append("contactNumber", formData.contactNumber);
      formDataToSend.append("interestedIn", formData.interestedIn);
      formDataToSend.append("currentBusiness", formData.currentBusiness);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx12345/exec",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. We'll get back to you soon!",
        });
        setFormData({
          name: "",
          fullAddress: "",
          city: "",
          state: "",
          pincode: "",
          contactNumber: "",
          interestedIn: "",
          currentBusiness: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit the form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen font-poppins">
      <Navigation />

      {/* Hero Section */}
      <section id="contact" className="relative py-32 px-4 bg-gradient-to-br from-primary/5 to-accent/5 mt-20">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-black text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to collaborate? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Info Blocks */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Phone Block */}
            <div className="text-center p-8 rounded-2xl bg-muted hover:shadow-soft transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-fresh mb-6">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground">
                Call Us
              </h3>
              <p className="font-poppins text-muted-foreground mb-2">
                +91 (XXX) XXX-XXXX
              </p>
              <p className="font-poppins text-sm text-muted-foreground">
                Available Monday - Friday, 9AM to 6PM IST
              </p>
            </div>

            {/* Email Block */}
            <div className="text-center p-8 rounded-2xl bg-muted hover:shadow-soft transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-fresh mb-6">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground">
                Email Us
              </h3>
              <p className="font-poppins text-muted-foreground mb-2">
                guptajikimojito@gmail.com
              </p>
              <p className="font-poppins text-sm text-muted-foreground">
                We'll respond within 24 hours
              </p>
            </div>

            {/* Address Block */}
            <div className="text-center p-8 rounded-2xl bg-muted hover:shadow-soft transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-fresh mb-6">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground">
                Visit Us
              </h3>
              <p className="font-poppins text-muted-foreground mb-2">
                Gupta Ji Ki Mojito Head Office
              </p>
              <p className="font-poppins text-sm text-muted-foreground">
                India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-muted p-8 rounded-2xl">
            {/* Name */}
            <div>
              <Label htmlFor="name" className="text-base font-semibold mb-2 block">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                className="w-full"
              />
            </div>

            {/* Full Address */}
            <div>
              <Label
                htmlFor="fullAddress"
                className="text-base font-semibold mb-2 block"
              >
                Full Address *
              </Label>
              <Textarea
                id="fullAddress"
                name="fullAddress"
                value={formData.fullAddress}
                onChange={handleInputChange}
                placeholder="Enter your full address"
                required
                className="w-full min-h-24"
              />
            </div>

            {/* City and State Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="city" className="text-base font-semibold mb-2 block">
                  City *
                </Label>
                <Input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter your city"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="state" className="text-base font-semibold mb-2 block">
                  State *
                </Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) =>
                    handleSelectChange("state", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
                    <SelectItem value="Arunachal Pradesh">Arunachal Pradesh</SelectItem>
                    <SelectItem value="Assam">Assam</SelectItem>
                    <SelectItem value="Bihar">Bihar</SelectItem>
                    <SelectItem value="Chhattisgarh">Chhattisgarh</SelectItem>
                    <SelectItem value="Goa">Goa</SelectItem>
                    <SelectItem value="Gujarat">Gujarat</SelectItem>
                    <SelectItem value="Haryana">Haryana</SelectItem>
                    <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                    <SelectItem value="Jharkhand">Jharkhand</SelectItem>
                    <SelectItem value="Karnataka">Karnataka</SelectItem>
                    <SelectItem value="Kerala">Kerala</SelectItem>
                    <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
                    <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="Manipur">Manipur</SelectItem>
                    <SelectItem value="Meghalaya">Meghalaya</SelectItem>
                    <SelectItem value="Mizoram">Mizoram</SelectItem>
                    <SelectItem value="Nagaland">Nagaland</SelectItem>
                    <SelectItem value="Odisha">Odisha</SelectItem>
                    <SelectItem value="Punjab">Punjab</SelectItem>
                    <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                    <SelectItem value="Sikkim">Sikkim</SelectItem>
                    <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                    <SelectItem value="Telangana">Telangana</SelectItem>
                    <SelectItem value="Tripura">Tripura</SelectItem>
                    <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                    <SelectItem value="Uttarakhand">Uttarakhand</SelectItem>
                    <SelectItem value="West Bengal">West Bengal</SelectItem>
                    <SelectItem value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</SelectItem>
                    <SelectItem value="Chandigarh">Chandigarh</SelectItem>
                    <SelectItem value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</SelectItem>
                    <SelectItem value="Lakshadweep">Lakshadweep</SelectItem>
                    <SelectItem value="Delhi">Delhi</SelectItem>
                    <SelectItem value="Puducherry">Puducherry</SelectItem>
                    <SelectItem value="Ladakh">Ladakh</SelectItem>
                    <SelectItem value="Jammu and Kashmir">Jammu and Kashmir</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Pincode and Contact Number Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="pincode" className="text-base font-semibold mb-2 block">
                  Pincode *
                </Label>
                <Input
                  id="pincode"
                  name="pincode"
                  type="text"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  placeholder="Enter your pincode"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <Label
                  htmlFor="contactNumber"
                  className="text-base font-semibold mb-2 block"
                >
                  Contact Number *
                </Label>
                <Input
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your contact number"
                  required
                  className="w-full"
                />
              </div>
            </div>

            {/* Interested In */}
            <div>
              <Label
                htmlFor="interestedIn"
                className="text-base font-semibold mb-2 block"
              >
                Interested In *
              </Label>
              <Select
                value={formData.interestedIn}
                onValueChange={(value) =>
                  handleSelectChange("interestedIn", value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select what you're interested in" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wholesale">Wholesale</SelectItem>
                  <SelectItem value="distribution">Distribution</SelectItem>
                  <SelectItem value="superstockist">Superstockist</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="currentBusiness"
                className="text-base font-semibold mb-2 block"
              >
                Current Business/Occupation *
              </Label>
              <Input
                id="currentBusiness"
                name="currentBusiness"
                type="text"
                value={formData.currentBusiness}
                onChange={handleInputChange}
                placeholder="Enter your current business or occupation"
                required
                className="w-full"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-poppins font-semibold py-6 text-lg shadow-glow transition-all duration-300"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Contact;
