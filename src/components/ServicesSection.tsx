import { Code, Globe, Smartphone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-accent" />,
      title: "Software Development",
      description: "Custom enterprise software solutions tailored to your business needs.",
      features: [
        "Enterprise Applications",
        "API Development",
        "Database Design",
        "Cloud Integration"
      ]
    },
    {
      icon: <Globe className="h-12 w-12 text-accent" />,
      title: "Web Development", 
      description: "Modern, responsive websites that convert visitors into customers.",
      features: [
        "React & Next.js",
        "E-commerce Platforms",
        "CMS Development",
        "Performance Optimization"
      ]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-accent" />,
      title: "App Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      features: [
        "React Native",
        "iOS & Android",
        "Progressive Web Apps",
        "App Store Deployment"
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We deliver comprehensive development solutions that help businesses thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your ideas into powerful digital solutions.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;