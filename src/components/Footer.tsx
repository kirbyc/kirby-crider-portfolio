
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
                Let's connect and discuss your next project. Follow me on social media or send me a message!
              </p>
              <div className="flex gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
              <div className="pt-8 text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
