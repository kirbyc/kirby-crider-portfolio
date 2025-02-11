
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="section-heading">Get in Touch</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="section-heading">Connect</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Want to see what I'm up to? Follow me on social media!
              </p>
              <div className="flex gap-6">
                <a
                  href="https://github.com/kirbyc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kirbycrider/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="mailto:kirby.crider@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
              <div className="pt-8 text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Kirby Crider. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
