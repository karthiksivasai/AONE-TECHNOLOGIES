import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const benefits = [
    'Custom Software Solutions',
    'Expert Development Team',
    'On-Time Project Delivery'
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary-light rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-light rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Transform Your Business With
              <span className="text-accent block mt-2">Expert Development</span>
            </h1>
            
            <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl">
              We partner with ambitious companies to build powerful software solutions, 
              stunning web applications, and mobile apps that drive real business results.
            </p>

            {/* Benefits List */}
            <div className="mt-8 space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-accent/60 text-accent hover:bg-primary-foreground/10 hover:border-primary-foreground/40 font-semibold px-8 transition-all duration-300"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              {/* Code Editor Mockup */}
              <div className="bg-card rounded-lg p-4 shadow-xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-warning"></div>
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                </div>
                <div className="space-y-2 text-sm font-mono">
                  <div className="text-accent">const solution = {"{"}</div>
                  <div className="text-muted-foreground ml-4">development: "custom",</div>
                  <div className="text-muted-foreground ml-4">quality: "enterprise",</div>
                  <div className="text-muted-foreground ml-4">delivery: "on-time",</div>
                  <div className="text-muted-foreground ml-4">support: "24/7"</div>
                  <div className="text-accent">{"}"}</div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-xs text-primary-foreground/70">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">98%</div>
                  <div className="text-xs text-primary-foreground/70">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <div className="text-xs text-primary-foreground/70">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;