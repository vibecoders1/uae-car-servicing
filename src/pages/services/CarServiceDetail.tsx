import { Link } from "react-router-dom"
import { ArrowLeft, Star, Clock, Shield, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"

const CarServiceDetail = () => {
  const servicePackages = [
    {
      name: "Basic Service",
      price: 150,
      duration: "2 hours",
      features: ["Oil Change", "Filter Check", "Basic Inspection", "Fluid Top-up"]
    },
    {
      name: "Comprehensive Service",
      price: 300,
      duration: "4 hours",
      features: ["Oil & Filter Change", "Brake Inspection", "Suspension Check", "Battery Test", "Tire Rotation"]
    },
    {
      name: "Premium Service",
      price: 500,
      duration: "6 hours",
      features: ["Complete Engine Service", "Transmission Service", "AC Service", "Brake Service", "Comprehensive Diagnostics"]
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
            <h1 className="text-3xl font-bold text-foreground">Full Car Service</h1>
            <p className="text-muted-foreground">Comprehensive maintenance and repair services</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Wrench className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h2 className="text-2xl font-bold mb-4">Professional Car Maintenance</h2>
                  <p className="text-muted-foreground">
                    Keep your vehicle running smoothly with our comprehensive car service packages. 
                    Our certified technicians use genuine parts and follow manufacturer specifications.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">Certified Technicians</h3>
                    <p className="text-sm text-muted-foreground">Expert automotive professionals</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">Same Day Service</h3>
                    <p className="text-sm text-muted-foreground">Quick turnaround time</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">6 Month Warranty</h3>
                    <p className="text-sm text-muted-foreground">Guaranteed workmanship</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Service Includes:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Engine oil and filter replacement</li>
                    <li>• Brake system inspection and service</li>
                    <li>• Suspension and steering check</li>
                    <li>• Battery and charging system test</li>
                    <li>• Tire inspection and rotation</li>
                    <li>• Fluid level checks and top-ups</li>
                    <li>• Air conditioning system service</li>
                    <li>• Comprehensive diagnostic scan</li>
                    <li>• Digital service report with photos</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Packages */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Service Packages</h2>
            <div className="space-y-4">
              {servicePackages.map((pkg, index) => (
                <Card key={index} className="hover-scale">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-2">{pkg.name}</h3>
                      <div className="text-2xl font-bold text-primary mb-2">AED {pkg.price}</div>
                      <Badge variant="secondary" className="mb-4">
                        <Clock className="w-3 h-3 mr-1" />
                        {pkg.duration}
                      </Badge>
                      
                      <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                        {pkg.features.map((feature, i) => (
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

export default CarServiceDetail