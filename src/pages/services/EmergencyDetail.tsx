import { Link } from "react-router-dom"
import { ArrowLeft, Star, Clock, Shield, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"

const EmergencyDetail = () => {
  const emergencyServices = [
    {
      name: "Roadside Assistance",
      price: 100,
      duration: "30-45 min",
      features: ["24/7 Availability", "Jump Start Service", "Flat Tire Change", "Emergency Fuel"]
    },
    {
      name: "Towing Service",
      price: 200,
      duration: "45-60 min",
      features: ["Professional Towing", "Up to 50km Distance", "Vehicle Protection", "Insurance Coverage"]
    },
    {
      name: "Mobile Mechanic",
      price: 300,
      duration: "60-90 min",
      features: ["On-site Diagnosis", "Minor Repairs", "Emergency Fixes", "Professional Assessment"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/services">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Emergency Services</h1>
            <p className="text-muted-foreground">24/7 roadside assistance and emergency support</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h2 className="text-2xl font-bold mb-4">24/7 Emergency Support</h2>
                  <p className="text-muted-foreground">
                    Never get stranded again with our comprehensive emergency services. Our professional 
                    team is available 24/7 to help you get back on the road quickly and safely.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">Fast Response</h3>
                    <p className="text-sm text-muted-foreground">Quick arrival time</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">24/7 Available</h3>
                    <p className="text-sm text-muted-foreground">Round the clock service</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">Professional Team</h3>
                    <p className="text-sm text-muted-foreground">Certified technicians</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Emergency Services Include:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Jump start service for dead batteries</li>
                    <li>• Flat tire change and repair</li>
                    <li>• Emergency fuel delivery</li>
                    <li>• Lockout assistance</li>
                    <li>• Professional towing service</li>
                    <li>• On-site mechanical assistance</li>
                    <li>• Accident support and coordination</li>
                    <li>• Insurance claim assistance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Packages */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Emergency Services</h2>
            <div className="space-y-4">
              {emergencyServices.map((service, index) => (
                <Card key={index} className="hover-scale">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                      <div className="text-2xl font-bold text-primary mb-2">AED {service.price}</div>
                      <Badge variant="secondary" className="mb-4">
                        <Clock className="w-3 h-3 mr-1" />
                        {service.duration}
                      </Badge>
                      
                      <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                        {service.features.map((feature, i) => (
                          <li key={i}>• {feature}</li>
                        ))}
                      </ul>
                      
                      <Button className="w-full gradient-primary text-white">
                        Call Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-destructive/10 border-destructive/20">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-destructive" />
                <h3 className="font-semibold text-destructive mb-2">Emergency Hotline</h3>
                <p className="text-2xl font-bold mb-2">+971 50 123 4567</p>
                <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmergencyDetail