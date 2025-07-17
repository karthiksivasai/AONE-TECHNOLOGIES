import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Code, Globe, Smartphone, Users, ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      id: 'software',
      icon: <Code className="h-16 w-16 text-accent" />,
      title: "Custom Software Development",
      description: "Enterprise-grade custom software solutions built to scale with your business needs and drive operational efficiency.",
      features: [
        "Custom Enterprise Applications",
        "API Development & Integration", 
        "Database Architecture & Design",
        "Cloud-Native Solutions",
        "Legacy System Modernization"
      ],
      process: [
        "Requirements Analysis",
        "Architecture Planning",
        "Agile Development", 
        "Quality Assurance",
        "Deployment & Support"
      ]
    },
    {
      id: 'web',
      icon: <Globe className="h-16 w-16 text-accent" />,
      title: "Web Development",
      description: "Modern, fast, and SEO-optimized websites and web applications that drive conversions and engage users effectively.",
      features: [
        "React & Next.js Applications",
        "E-commerce Platforms",
        "Content Management Systems", 
        "Progressive Web Apps",
        "Performance Optimization"
      ],
      process: [
        "UX/UI Design",
        "Frontend Development",
        "Backend Integration",
        "Testing & Optimization", 
        "Launch & Maintenance"
      ]
    },
    {
      id: 'app',
      icon: <Smartphone className="h-16 w-16 text-accent" />,
      title: "App Development", 
      description: "Native and cross-platform mobile applications for iOS and Android platforms with seamless user experiences.",
      features: [
        "React Native Development",
        "iOS & Android Native Apps",
        "Cross-Platform Solutions",
        "App Store Optimization",
        "Push Notifications & Analytics"
      ],
      process: [
        "Market Research",
        "UI/UX Design",
        "Development & Testing",
        "App Store Submission",
        "Post-Launch Support"
      ]
    },
    {
      id: 'uiux',
      icon: <Users className="h-16 w-16 text-accent" />,
      title: "UI/UX Design & Prototyping",
      description: "User-centered design solutions that create intuitive, engaging experiences and drive customer satisfaction.",
      features: [
        "User Experience Research",
        "Interactive Prototyping",
        "Design Systems & Style Guides",
        "Usability Testing",
        "Responsive Design"
      ],
      process: [
        "User Research",
        "Wireframe Creation",
        "Visual Design",
        "Prototype Testing",
        "Design Handoff"
      ]
    },
    {
      id: 'consulting',
      icon: <Users className="h-16 w-16 text-accent" />,
      title: "IT Consulting & Strategy",
      description: "Strategic technology guidance to align your IT infrastructure with business objectives and drive digital transformation.",
      features: [
        "Technology Strategy Planning",
        "Digital Transformation Roadmap",
        "System Architecture Review",
        "Vendor Selection & Management",
        "Risk Assessment & Mitigation"
      ],
      process: [
        "Current State Analysis",
        "Strategic Planning",
        "Roadmap Development",
        "Implementation Support",
        "Ongoing Advisory"
      ]
    },
    {
      id: 'cloud',
      icon: <Globe className="h-16 w-16 text-accent" />,
      title: "Cloud Infrastructure & Deployment",
      description: "Scalable, secure cloud solutions that optimize performance, reduce costs, and ensure reliable operations.",
      features: [
        "AWS, Azure & Google Cloud",
        "Container Orchestration",
        "Auto-Scaling Solutions",
        "Security & Compliance",
        "Cost Optimization"
      ],
      process: [
        "Infrastructure Assessment",
        "Migration Planning",
        "Cloud Implementation",
        "Security Configuration",
        "Performance Monitoring"
      ]
    },
    {
      id: 'qa',
      icon: <CheckCircle className="h-16 w-16 text-accent" />,
      title: "QA & Software Testing",
      description: "Comprehensive testing services to ensure your software meets the highest quality standards and performs flawlessly.",
      features: [
        "Automated Testing Frameworks",
        "Manual & Exploratory Testing",
        "Performance & Load Testing",
        "Security Testing",
        "Continuous Quality Assurance"
      ],
      process: [
        "Test Planning",
        "Test Case Development",
        "Execution & Reporting",
        "Defect Management",
        "Quality Metrics"
      ]
    },
    {
      id: 'devops',
      icon: <Code className="h-16 w-16 text-accent" />,
      title: "DevOps Services",
      description: "Streamlined development and deployment processes that accelerate delivery while maintaining quality and reliability.",
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Monitoring & Alerting",
        "Release Management",
        "Performance Optimization"
      ],
      process: [
        "Current Process Review",
        "Pipeline Design",
        "Tool Implementation",
        "Team Training",
        "Continuous Improvement"
      ]
    },
    {
      id: 'support',
      icon: <Shield className="h-16 w-16 text-accent" />,
      title: "Maintenance & Support",
      description: "Ongoing technical support and maintenance services to keep your systems running smoothly and efficiently.",
      features: [
        "24/7 System Monitoring",
        "Bug Fixes & Updates",
        "Performance Optimization",
        "Security Patch Management",
        "Technical Help Desk"
      ],
      process: [
        "Support Plan Setup",
        "Monitoring Implementation",
        "Issue Resolution",
        "Regular Maintenance",
        "Performance Reports"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive development solutions designed to transform your business 
            and accelerate your digital growth.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      {service.icon}
                      <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h3 className="font-semibold text-primary mb-4">What We Deliver</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-primary mb-4">Our Process</h3>
                        <ol className="space-y-2">
                          {service.process.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start space-x-3 text-sm">
                              <span className="bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                                {stepIndex + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    <Button size="lg" className="bg-accent hover:bg-accent-light">
                      Get Started with {service.title}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <Card className="p-8 bg-muted/30 border-accent/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-mono text-muted-foreground">
                            {service.title.toLowerCase().replace(/\s+/g, '_')}.js
                          </div>
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-destructive"></div>
                            <div className="w-3 h-3 rounded-full bg-warning"></div>
                            <div className="w-3 h-3 rounded-full bg-success"></div>
                          </div>
                        </div>
                        
                        <div className="bg-card rounded-lg p-6 font-mono text-sm">
                          <div className="text-accent">function buildSolution() {"{"}</div>
                          <div className="text-muted-foreground ml-4">const requirements = analyze();</div>
                          <div className="text-muted-foreground ml-4">const solution = develop(requirements);</div>
                          <div className="text-muted-foreground ml-4">const result = deploy(solution);</div>
                          <div className="text-muted-foreground ml-4">return result;</div>
                          <div className="text-accent">{"}"}</div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 pt-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-accent">100%</div>
                            <div className="text-xs text-muted-foreground">Quality</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-accent">Fast</div>
                            <div className="text-xs text-muted-foreground">Delivery</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-accent">24/7</div>
                            <div className="text-xs text-muted-foreground">Support</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Let's discuss your project and create a solution that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;