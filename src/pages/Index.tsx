import { useState, useEffect } from "react"
import { Star, Users, Shield, Clock, Car, Wrench, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import Header from "@/components/Header"
import StepProgress from "@/components/StepProgress"
import CarSelection from "@/components/CarSelection"
import ServiceCategories from "@/components/ServiceCategories"
import LocationSelection from "@/components/LocationSelection"
import Checkout from "@/components/Checkout"

interface CartItem {
  id: string
  title: string
  description: string
  price: number
  category: string
  quantity: number
  features: string[]
  warranty?: string
}

interface SelectedCar {
  brand: string
  model: string
  year: string
}

interface ScheduleDetails {
  date: string
  time: string
  location: string
  vehicleNumber: string
}

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0) // 0 = landing, 1-4 = service steps
  const [selectedCar, setSelectedCar] = useState<SelectedCar | null>(null)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [scheduleDetails, setScheduleDetails] = useState<ScheduleDetails | null>(null)

  const handleStartService = () => {
    setCurrentStep(1)
  }

  const handleCarSelect = (car: SelectedCar) => {
    setSelectedCar(car)
  }

  const handleCartUpdate = (items: CartItem[]) => {
    setCartItems(items)
  }

  const handleScheduleUpdate = (schedule: ScheduleDetails) => {
    setScheduleDetails(schedule)
  }

  const handleOrderComplete = () => {
    // Reset to landing page or show success page
    setCurrentStep(0)
    setSelectedCar(null)
    setCartItems([])
    setScheduleDetails(null)
  }

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-accent/20 text-accent-foreground">
              ⭐ 4.5/5 Rating • 100K+ Happy Customers
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Welcome to
              <span className="block gradient-primary bg-clip-text text-transparent">
                UAE Car Servicing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your one-stop premium car care platform. Professional servicing delivered to your doorstep with warranty and expert care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={handleStartService}
                size="lg" 
                className="gradient-primary text-white font-semibold px-8 py-6 text-lg"
              >
                <Car className="w-6 h-6 mr-2" />
                Book Your Service
              </Button>
              <Link to="/mobile-app">
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                  Download App
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100K+</div>
                <div className="text-sm text-muted-foreground">Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.5★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Locations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MySyara Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why UAE Car Servicing?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of car care with our premium services and expert technicians
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="service-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Technicians</h3>
                <p className="text-muted-foreground">Certified professionals with years of experience</p>
              </CardContent>
            </Card>

            <Card className="service-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full gradient-service flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Service Warranty</h3>
                <p className="text-muted-foreground">Comprehensive warranty on all services</p>
              </CardContent>
            </Card>

            <Card className="service-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Same Day Service</h3>
                <p className="text-muted-foreground">Quick turnaround with doorstep delivery</p>
              </CardContent>
            </Card>

            <Card className="service-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full gradient-service flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Products</h3>
                <p className="text-muted-foreground">Only the finest products and materials</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What we offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive car care services tailored to your vehicle's needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Car Wash & Detailing", icon: "🚿", desc: "Premium wash and detailing services" },
              { title: "Full Car Service", icon: "🔧", desc: "Comprehensive maintenance and repairs" },
              { title: "3M Protection", icon: "🛡️", desc: "Advanced paint and interior protection" },
              { title: "Battery Service", icon: "🔋", desc: "Battery testing, replacement & maintenance" },
              { title: "Emergency Support", icon: "🚨", desc: "24/7 roadside assistance" },
              { title: "Monthly Plans", icon: "📅", desc: "Affordable monthly service packages" }
            ].map((service, index) => (
              <Card key={index} className="service-card text-center">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                   <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace('3m', '').replace('detailing', 'wash').replace('full-car-service', 'car-service').replace('protection', 'protection').replace('battery-replacement', 'battery').replace('emergency-services', 'emergency').replace('monthly-wash', 'monthly-plans')}`}>
                     <Button variant="outline" size="sm">Learn More</Button>
                   </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to get started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience premium car care today
          </p>
          <Button 
            onClick={handleStartService}
            size="lg" 
            variant="secondary"
            className="bg-white text-primary font-semibold px-8 py-6 text-lg hover:bg-white/90"
          >
            Book Your Service Now
          </Button>
        </div>
      </section>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItems={cartItems}
        onUpdateQuantity={(id, quantity) => {
          setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity } : item
          ))
        }}
        onRemoveItem={(id) => {
          setCartItems(cartItems.filter(item => item.id !== id))
        }}
        onClearCart={() => setCartItems([])}
      />
      
      {currentStep === 0 && <LandingPage />}
      
      {currentStep > 0 && (
        <div className="container mx-auto px-4 py-8">
          <StepProgress currentStep={currentStep} />
          
          {currentStep === 1 && (
            <CarSelection 
              onCarSelect={handleCarSelect}
              onNext={() => setCurrentStep(2)}
            />
          )}
          
          {currentStep === 2 && selectedCar && (
            <ServiceCategories
              selectedCar={selectedCar}
              onCartUpdate={handleCartUpdate}
              onNext={() => setCurrentStep(3)}
            />
          )}
          
          {currentStep === 3 && (
            <LocationSelection
              cartItems={cartItems}
              onNext={() => setCurrentStep(4)}
              onScheduleUpdate={handleScheduleUpdate}
            />
          )}
          
          {currentStep === 4 && selectedCar && scheduleDetails && (
            <Checkout
              cartItems={cartItems}
              schedule={scheduleDetails}
              selectedCar={selectedCar}
              onOrderComplete={handleOrderComplete}
            />
          )}
        </div>
      )}
      
      {/* Fixed Cart Summary for Service Flow */}
      {currentStep > 1 && cartItems.length > 0 && (
        <div className="fixed bottom-4 right-4 z-50">
          <Card className="gradient-service text-white">
            <CardContent className="p-4">
              <div className="text-sm font-semibold">
                Cart: {getCartCount()} items • AED {getTotalPrice().toFixed(1)}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default Index
