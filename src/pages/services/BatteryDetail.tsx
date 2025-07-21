import { Link } from "react-router-dom"
import { ArrowLeft, Star, Clock, Shield, Battery } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"

const BatteryDetail = () => {
  const batteryServices = [
    {
      name: "Battery Test",
      price: 25,
      duration: "15 min",
      features: ["Complete Battery Analysis", "Charging System Check", "Performance Report", "Free Consultation"]
    },
    {
      name: "Battery Replacement",
      price: 180,
      duration: "30 min",
      features: ["Premium Battery", "Professional Installation", "Old Battery Disposal", "6 Month Warranty"]
    },
    {
      name: "Complete Electrical Service",
      price: 350,
      duration: "90 min",
      features: ["Battery & Alternator Service", "Starter Motor Check", "Electrical System Diagnosis", "Complete Report"]
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
            <h1 className="text-3xl font-bold text-foreground">Battery Services</h1>
            <p className="text-muted-foreground">Battery testing, replacement and maintenance</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Battery className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h2 className="text-2xl font-bold mb-4">Professional Battery Services</h2>
                  <p className="text-muted-foreground">
                    Keep your car starting reliably with our professional battery services. We offer testing, 
                    replacement, and maintenance using premium batteries suited for UAE climate conditions.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">Premium Batteries</h3>
                    <p className="text-sm text-muted-foreground">Top quality brands</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">Quick Service</h3>
                    <p className="text-sm text-muted-foreground">Fast installation</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">Warranty Coverage</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive protection</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Service Includes:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Complete battery performance analysis</li>
                    <li>• Charging system inspection</li>
                    <li>• Terminal cleaning and protection</li>
                    <li>• Load testing and capacity check</li>
                    <li>• Professional installation service</li>
                    <li>• Proper disposal of old battery</li>
                    <li>• Digital service report</li>
                    <li>• Warranty registration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Packages */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Battery Services</h2>
            <div className="space-y-4">
              {batteryServices.map((service, index) => (
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
                        Book Service
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BatteryDetail