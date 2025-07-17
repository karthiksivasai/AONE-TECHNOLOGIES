import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Target, Award, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Client-Focused Excellence",
      description: "We prioritize your business goals and deliver solutions that drive measurable results and long-term success."
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Trusted Partnership",
      description: "Transparency, reliability, and clear communication form the foundation of every client relationship we build."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Technical Excellence",
      description: "Our team stays ahead of industry trends, ensuring you receive cutting-edge solutions built with best practices."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            About ConsultCorp
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            We're a technology consulting firm dedicated to transforming businesses through 
            innovative software solutions, strategic guidance, and exceptional service.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded with a vision to bridge the gap between ambitious business goals and 
                cutting-edge technology, ConsultCorp has grown from a small team of passionate 
                developers into a trusted partner for companies nationwide.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We understand that every business is unique, which is why we don't believe in 
                one-size-fits-all solutions. Our approach combines deep technical expertise 
                with strategic business insight to deliver custom solutions that truly move the needle.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to have helped dozens of companies streamline operations, 
                enhance customer experiences, and achieve sustainable growth through technology.
              </p>
            </div>
            
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-primary mb-6">Our Mission</h3>
              <p className="text-muted-foreground mb-8">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in an ever-evolving digital landscape.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-accent">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose ConsultCorp?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Proven Track Record</h3>
                  <p className="text-muted-foreground">50+ successful projects across diverse industries with consistent on-time delivery.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">End-to-End Solutions</h3>
                  <p className="text-muted-foreground">From initial consultation to ongoing support, we handle every aspect of your project.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Agile Methodology</h3>
                  <p className="text-muted-foreground">Flexible, iterative approach ensures rapid delivery and continuous improvement.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Industry Expertise</h3>
                  <p className="text-muted-foreground">Deep knowledge across healthcare, finance, e-commerce, and professional services.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Scalable Architecture</h3>
                  <p className="text-muted-foreground">Solutions built to grow with your business, from startup to enterprise scale.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Ongoing Partnership</h3>
                  <p className="text-muted-foreground">We're not just vendors – we're long-term partners invested in your success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-primary py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Let's discuss how we can help transform your business through technology.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;