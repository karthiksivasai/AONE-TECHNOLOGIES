import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Software Development', href: '/services#software' },
    { name: 'Web Development', href: '/services#web' },
    { name: 'App Development', href: '/services#app' },
    { name: 'Consulting', href: '/services#consulting' }
  ];

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: <Github className="h-5 w-5" /> },
    { name: 'LinkedIn', href: '#', icon: <Linkedin className="h-5 w-5" /> },
    { name: 'Twitter', href: '#', icon: <Twitter className="h-5 w-5" /> }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">C</span>
                </div>
                <span className="text-xl font-bold">ConsultCorp</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
                We're a team of experienced developers and consultants dedicated to 
                transforming businesses through innovative technology solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-primary-foreground/80">Email</p>
                    <a 
                      href="mailto:contact@consultcorp.com" 
                      className="text-sm hover:text-accent transition-colors"
                    >
                      contact@consultcorp.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-primary-foreground/80">Phone</p>
                    <a 
                      href="tel:+1234567890" 
                      className="text-sm hover:text-accent transition-colors"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-primary-foreground/80">Office</p>
                    <p className="text-sm">
                      123 Business Ave<br />
                      Tech City, TC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-primary-foreground/70">
              © 2024 ConsultCorp. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/70">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;