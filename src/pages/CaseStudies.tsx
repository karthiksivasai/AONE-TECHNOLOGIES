import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-Commerce Platform Transformation",
      client: "RetailMax Inc.",
      industry: "E-Commerce",
      timeline: "6 months",
      description: "Complete digital transformation of legacy e-commerce system, resulting in 150% increase in online sales and improved customer experience.",
      challenges: [
        "Outdated legacy system causing frequent crashes",
        "Poor mobile experience affecting 60% of traffic",
        "Slow checkout process with 40% abandonment rate"
      ],
      solutions: [
        "Modern React-based frontend with optimized UX",
        "Microservices architecture for better scalability",
        "AI-powered recommendation engine",
        "Streamlined checkout process"
      ],
      results: [
        "150% increase in online sales",
        "65% reduction in page load times",
        "25% decrease in cart abandonment",
        "99.9% uptime achievement"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Redis"]
    },
    {
      title: "Healthcare Management System",
      client: "MedCare Solutions", 
      industry: "Healthcare",
      timeline: "8 months",
      description: "Custom patient management system with integrated billing, scheduling, and telemedicine capabilities for a growing healthcare network.",
      challenges: [
        "Manual paper-based patient records",
        "Inefficient appointment scheduling",
        "Lack of integrated billing system",
        "No telemedicine capabilities during COVID-19"
      ],
      solutions: [
        "Comprehensive patient management platform",
        "Automated scheduling with SMS/email reminders",
        "Integrated billing and insurance processing",
        "HIPAA-compliant telemedicine module"
      ],
      results: [
        "80% reduction in administrative time",
        "95% patient satisfaction rate",
        "50% increase in appointment efficiency",
        "Full HIPAA compliance achieved"
      ],
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "WebRTC"]
    },
    {
      title: "Financial Analytics Dashboard",
      client: "InvestPro Analytics",
      industry: "Financial Services", 
      timeline: "4 months",
      description: "Real-time financial analytics platform with advanced reporting, risk assessment, and portfolio management tools for investment professionals.",
      challenges: [
        "Multiple data sources causing delays",
        "Complex calculations taking hours to process",
        "Lack of real-time market data integration",
        "Outdated reporting system"
      ],
      solutions: [
        "Real-time data pipeline with streaming analytics",
        "Advanced charting and visualization tools",
        "Automated risk assessment algorithms",
        "Custom report builder with PDF export"
      ],
      results: [
        "90% faster data processing",
        "Real-time market data integration",
        "300% improvement in report generation speed",
        "25% increase in client satisfaction"
      ],
      technologies: ["Angular", "C#", ".NET Core", "SQL Server", "SignalR"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve their goals 
            through innovative technology solutions and strategic partnerships.
          </p>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">150%</div>
              <div className="text-sm text-muted-foreground">Average ROI Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-border shadow-lg overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-primary mb-2">{study.title}</CardTitle>
                      <CardDescription className="text-lg text-muted-foreground">
                        {study.description}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="outline" className="w-fit">
                        <Users className="w-3 h-3 mr-1" />
                        {study.client}
                      </Badge>
                      <Badge variant="outline" className="w-fit">
                        <Calendar className="w-3 h-3 mr-1" />
                        {study.timeline}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Challenges */}
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-4">Challenges</h3>
                      <ul className="space-y-2">
                        {study.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-4">Solutions</h3>
                      <ul className="space-y-2">
                        {study.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-4">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <TrendingUp className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Let's discuss how we can help transform your business with custom technology solutions.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8">
            Start Your Project
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;