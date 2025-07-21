import { Link } from "react-router-dom"
import { ArrowLeft, Star, Clock, Shield, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"

const CarWashDetail = () => {
  const washPackages = [
    {
      name: "Basic Wash",
      price: 25,
      duration: "30 min",
      features: ["Exterior Wash", "Wheel Cleaning", "Basic Dry"]
    },
    {
      name: "Premium Wash",
      price: 45,
      duration: "45 min",
      features: ["Exterior Wash", "Interior Vacuum", "Wheel Cleaning", "Dashboard Clean", "Premium Dry"]
    },
    {
      name: "Deluxe Detailing",
      price: 80,
      duration: "90 min",
      features: ["Complete Exterior Wash", "Interior Deep Clean", "Wax Application", "Tire Shine", "Air Freshener"]
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
            <h1 className="text-3xl font-bold text-foreground">Car Wash & Detailing</h1>
            <p className="text-muted-foreground">Professional car washing and detailing services</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Droplets className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h2 className="text-2xl font-bold mb-4">Premium Car Wash Services</h2>
                  <p className="text-muted-foreground">
                    Keep your car spotless with our professional washing and detailing services. 
                    We use premium products and eco-friendly methods to ensure your vehicle looks its best.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">Premium Products</h3>
                    <p className="text-sm text-muted-foreground">High-quality cleaning products</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">Quick Service</h3>
                    <p className="text-sm text-muted-foreground">Fast and efficient cleaning</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">Paint Protection</h3>
                    <p className="text-sm text-muted-foreground">Safe for all car finishes</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Exterior hand wash with premium soap</li>
                    <li>• Wheel and tire cleaning</li>
                    <li>• Interior vacuuming and wiping</li>
                    <li>• Dashboard and console cleaning</li>
                    <li>• Window cleaning (inside and outside)</li>
                    <li>• Paint-safe drying methods</li>
                    <li>• Final inspection and quality check</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Packages */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Choose Your Package</h2>
            <div className="space-y-4">
              {washPackages.map((pkg, index) => (
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
                        Book Now
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

export default CarWashDetail