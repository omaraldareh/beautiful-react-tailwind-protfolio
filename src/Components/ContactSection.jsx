import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import cn from "../lib/utils";
import { FaTelegram } from "react-icons/fa";
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pja88p2",        
        "template_xxowgsl",        
        e.target,
        "M5f002djprdDx1Xer"  
      )
      .then(() => {
        toast({
        title: "Message Sent ✅",
        description: "Thanks! I’ll get back to you soon.",
        className: "bg-green-600 text-white border-green-700"
        });
        e.target.reset();
      })
      .catch(() => {
        toast({
          title: "Error ❌",
          description: "Something went wrong, try again.",
        });
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:aldarehomar@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    aldarehomar@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+962782343886"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +962 782343886
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Location</h4>
                  <p className="text-muted-foreground">
                    Amman, Jordan
                  </p>
                </div>
              </div>

            </div>

            {/* Socials */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                
                <a href="https://www.linkedin.com/in/omar-aldareya-12b959245/" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>

                <a href="https://www.instagram.com/omaraldariy/" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>

                <a href="https://t.me/omar25873" target="_blank" rel="noopener noreferrer">
                  <FaTelegram size={20} />
                </a>

              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Omar Aldareya..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Hello I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={16} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};