import { Link } from "react-router-dom"
import { ArrowLeft, Star, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"

const ProtectionDetail = () => {
  const protectionPackages = [
    {
      name: "Paint Protection Film",
      price: 800,
      duration: "1 day",
      features: ["Clear Protective Film", "Scratch Resistance", "Self-Healing Properties", "5 Year Warranty"]
    },
    {
      name: "Ceramic Coating",
      price: 1200,
      duration: "2 days",
      features: ["9H Hardness Coating", "Hydrophobic Properties", "UV Protection", "3 Year Warranty"]
    },
    {
      name: "Complete Protection",
      price: 2000,
      duration: "3 days",
      features: ["Paint Protection Film", "Ceramic Coating", "Interior Protection", "Window Tinting", "5 Year Warranty"]
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
            <h1 className="text-3xl font-bold text-foreground">3M Protection Services</h1>
            <p className="text-muted-foreground">Advanced paint and interior protection solutions</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Shield className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h2 className="text-2xl font-bold mb-4">Premium Vehicle Protection</h2>
                  <p className="text-muted-foreground">
                    Protect your investment with our advanced 3M protection solutions. Our professional-grade 
                    products shield your vehicle from environmental damage while maintaining its pristine appearance.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">3M Certified</h3>
                    <p className="text-sm text-muted-foreground">Authorized 3M installer</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">Professional Install</h3>
                    <p className="text-sm text-muted-foreground">Expert application process</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">Long-term Protection</h3>
                    <p className="text-sm text-muted-foreground">Years of reliable protection</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Protection Benefits:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Protection against stone chips and scratches</li>
                    <li>• UV damage prevention</li>
                    <li>• Self-healing properties for minor scratches</li>
                    <li>• Maintains vehicle resale value</li>
                    <li>• Easy maintenance and cleaning</li>
                    <li>• Invisible, optically clear protection</li>
                    <li>• Professional installation warranty</li>
                    <li>• Manufacturer-backed guarantee</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Packages */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Protection Packages</h2>
            <div className="space-y-4">
              {protectionPackages.map((pkg, index) => (
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
                        Get Protection
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

export default ProtectionDetail