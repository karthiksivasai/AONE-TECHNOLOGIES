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

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ConsultCorp is a premier technology consulting firm specializing in custom software development, 
            web applications, and mobile solutions. We transform complex business challenges into elegant, 
            scalable technology solutions that drive growth and competitive advantage.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-border shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage in an ever-evolving digital landscape. 
                  We believe every company deserves access to enterprise-grade technology solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted technology partner for growing businesses, known for 
                  delivering exceptional solutions that exceed expectations and create lasting 
                  value. We envision a future where every business can leverage technology for success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Founded in 2018 with a vision to bridge the gap between ambitious business goals and 
                  cutting-edge technology, ConsultCorp has grown from a small team of passionate 
                  developers into a trusted partner for companies nationwide.
                </p>
                <p className="leading-relaxed">
                  Our journey began when our founders recognized that many businesses were struggling 
                  to find reliable technology partners who truly understood their unique challenges. 
                  We set out to change that by combining deep technical expertise with genuine 
                  business insight.
                </p>
                <p className="leading-relaxed">
                  Today, we're proud to have helped over 50 companies streamline operations, 
                  enhance customer experiences, and achieve sustainable growth through technology. 
                  Our success is measured not just in projects completed, but in the long-term 
                  success of our clients.
                </p>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-primary mb-6 text-center">By the Numbers</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-accent mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-card rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground italic">
                  "Excellence is not a destination; it's a continuous journey. 
                  Every project we undertake is an opportunity to exceed expectations."
                </p>
                <p className="text-xs text-primary mt-2 font-semibold">- ConsultCorp Team</p>
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

      {/* Team Overview */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in software development, 
              design, and business strategy to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-border hover:shadow-lg transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-xl text-primary">Leadership Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Experienced executives with proven track records in technology 
                  leadership and business strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">Development Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Senior developers and architects specializing in modern frameworks 
                  and scalable solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-success/10 rounded-full w-20 h-20 flex items-center justify-center">
                  <Target className="h-10 w-10 text-success" />
                </div>
                <CardTitle className="text-xl text-primary">Strategy Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Business analysts and consultants focused on aligning technology 
                  solutions with business objectives.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              <strong>Coming Soon:</strong> Individual team member profiles and expertise areas.
            </p>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Join Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose ConsultCorp?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine technical excellence with business acumen to deliver solutions that work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-3">Proven Track Record</h3>
              <p className="text-muted-foreground text-sm">
                50+ successful projects with 98% client satisfaction rate and consistent on-time delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-3">End-to-End Solutions</h3>
              <p className="text-muted-foreground text-sm">
                From consultation to deployment and ongoing support, we handle every aspect of your project.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-success/10 rounded-lg w-fit">
                <Target className="h-8 w-8 text-success" />
              </div>
              <h3 className="font-semibold text-primary mb-3">Agile Methodology</h3>
              <p className="text-muted-foreground text-sm">
                Flexible, iterative approach ensures rapid delivery and continuous improvement.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-3">Industry Expertise</h3>
              <p className="text-muted-foreground text-sm">
                Deep knowledge across healthcare, finance, e-commerce, and professional services.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-3">Scalable Architecture</h3>
              <p className="text-muted-foreground text-sm">
                Solutions built to grow with your business, from startup to enterprise scale.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-success/10 rounded-lg w-fit">
                <Target className="h-8 w-8 text-success" />
              </div>
              <h3 className="font-semibold text-primary mb-3">Ongoing Partnership</h3>
              <p className="text-muted-foreground text-sm">
                We're long-term partners invested in your success, not just project vendors.
              </p>
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