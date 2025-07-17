import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: "Email",
      content: "contact@consultcorp.com",
      link: "mailto:contact@consultcorp.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Phone", 
      content: "+1 (234) 567-8900",
      link: "tel:+1234567890"
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Office",
      content: "123 Business Ave, Tech City, TC 12345",
      link: "#"
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Business Hours",
      content: "Mon-Fri: 9:00 AM - 6:00 PM EST",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Ready to start your project? We'd love to hear about your goals and 
            discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-primary mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">
                        Your message has been sent successfully. We'll respond within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                            First Name *
                          </Label>
                          <Input 
                            id="firstName" 
                            type="text" 
                            required 
                            className="mt-1"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                            Last Name *
                          </Label>
                          <Input 
                            id="lastName" 
                            type="text" 
                            required 
                            className="mt-1"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email Address *
                        </Label>
                        <Input 
                          id="email" 
                          type="email" 
                          required 
                          className="mt-1"
                          placeholder="john@company.com"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="company" className="text-sm font-medium text-foreground">
                          Company Name
                        </Label>
                        <Input 
                          id="company" 
                          type="text" 
                          className="mt-1"
                          placeholder="Your Company"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="service" className="text-sm font-medium text-foreground">
                          Service Interest
                        </Label>
                        <select 
                          id="service" 
                          className="mt-1 w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select a service</option>
                          <option value="software">Custom Software Development</option>
                          <option value="web">Web Development</option>
                          <option value="app">App Development</option>
                          <option value="consulting">IT Consulting</option>
                          <option value="ui-ux">UI/UX Design</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-sm font-medium text-foreground">
                          Project Details *
                        </Label>
                        <Textarea 
                          id="message" 
                          required 
                          className="mt-1 min-h-[120px]"
                          placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                        />
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-4">
                          <strong>We typically respond within 24 hours.</strong>
                        </p>
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold"
                        >
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary text-sm">{info.title}</h3>
                        {info.link && info.link !== "#" ? (
                          <a 
                            href={info.link} 
                            className="text-muted-foreground hover:text-accent transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response Card */}
              <Card className="bg-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Quick Response Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    We understand that time is critical for your business. That's why we guarantee:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>Initial response within 4 hours</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>Project proposal within 48 hours</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>Free consultation call within 24 hours</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Urgent Project?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For time-sensitive projects or technical emergencies:
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Call Now: +1 (234) 567-8900
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;