import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Layout, Zap, Settings } from "lucide-react";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-background"
      aria-label="Our Services"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">What We Do</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide custom solutions to help your business thrive online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Card: Custom Website Development */}
          <Card className="py-6">
            <CardHeader className="flex flex-col items-center">
              <Code className="w-10 h-10 text-primary" />
              <CardTitle className="mt-2 text-xl font-semibold text-foreground text-center">
                Custom Website Development
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Handcrafted websites built with modern best practices, fully
              tailored to your business needs.
            </CardContent>
          </Card>

          {/* Service Card: Web Applications */}
          <Card className="py-6">
            <CardHeader className="flex flex-col items-center">
              <Layout className="w-10 h-10 text-primary" />
              <CardTitle className="mt-2 text-xl font-semibold text-foreground">
                Web Applications
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Robust and scalable web apps designed to enhance user engagement
              and drive growth.
            </CardContent>
          </Card>

          {/* Service Card: AI Solutions */}
          <Card className="py-6">
            <CardHeader className="flex flex-col items-center">
              <Zap className="w-10 h-10 text-primary" />
              <CardTitle className="mt-2 text-xl font-semibold text-foreground">
                AI Solutions
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Innovative AI-powered solutions to streamline your processes and
              unlock new opportunities.
            </CardContent>
          </Card>

          {/* Service Card: Web Management */}
          <Card className="py-6">
            <CardHeader className="flex flex-col items-center">
              <Settings className="w-10 h-10 text-primary" />
              <CardTitle className="mt-2 text-xl font-semibold text-foreground">
                Web Management
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Reliable web management and maintenance services to keep your
              online presence running smoothly.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
