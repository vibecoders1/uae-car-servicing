import { Link } from "react-router-dom"
import { Car, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"

const Services = () => {
  const services = [
    {
      title: "Car Wash & Detailing",
      description: "Premium wash and detailing services for your vehicle",
      icon: "🚿",
      link: "/services/car-wash",
      price: "Starting from AED 25"
    },
    {
      title: "Full Car Service",
      description: "Comprehensive maintenance and repair services",
      icon: "🔧",
      link: "/services/car-service",
      price: "Starting from AED 150"
    },
    {
      title: "3M Protection",
      description: "Advanced paint and interior protection solutions",
      icon: "🛡️",
      link: "/services/protection",
      price: "Starting from AED 500"
    },
    {
      title: "Battery Service",
      description: "Battery testing, replacement and maintenance",
      icon: "🔋",
      link: "/services/battery",
      price: "Starting from AED 80"
    },
    {
      title: "Emergency Services",
      description: "24/7 roadside assistance and emergency support",
      icon: "🚨",
      link: "/services/emergency",
      price: "Starting from AED 100"
    },
    {
      title: "Monthly Plans",
      description: "Affordable monthly service packages",
      icon: "📅",
      link: "/services/monthly-plans",
      price: "Starting from AED 99/month"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Our Services</h1>
            <p className="text-muted-foreground">Professional car care services in UAE</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-primary font-semibold mb-4">{service.price}</p>
                  <Link to={service.link}>
                    <Button className="gradient-primary text-white w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services