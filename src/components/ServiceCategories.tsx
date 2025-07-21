import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus, Minus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Service {
  id: string
  title: string
  description: string
  price: number
  category: string
  image?: string
  warranty?: string
  features: string[]
}

interface CartItem extends Service {
  quantity: number
}

interface ServiceCategoriesProps {
  selectedCar: { brand: string; model: string; year: string }
  onCartUpdate: (items: CartItem[]) => void
  onNext: () => void
}

const ServiceCategories = ({ selectedCar, onCartUpdate, onNext }: ServiceCategoriesProps) => {
  const [activeCategory, setActiveCategory] = useState("car-service")
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { id: "car-wash", name: "Car Wash", icon: "🚿" },
    { id: "car-service", name: "Car Service", icon: "🔧" },
    { id: "3m-detailing", name: "3M Detailing", icon: "✨" },
    { id: "battery", name: "Battery", icon: "🔋" },
    { id: "emergency", name: "Emergency Services", icon: "🚨" },
    { id: "monthly-wash", name: "Monthly Car Wash", icon: "📅" },
    { id: "body-paint", name: "Body Paint", icon: "🎨" },
    { id: "doorstep", name: "Doorstep Mechanic", icon: "🏠" },
    { id: "ceramic", name: "Ceramic Coating", icon: "🛡️" }
  ]

  const services: Service[] = [
    {
      id: "full-service",
      title: "Full Synthetic 10k/15k Engine Oil Service",
      description: "Full Synthetic 10k/15k Engine oil From MOBIL & Original Oil Filter replacement with All fluids Top-up, Ac & Air Filter cleaning. With FREE pickup & drop off using Valet Driver and Get your Car Back same day. [ 6 Months Service Warranty ]",
      price: 517.5,
      category: "car-service",
      warranty: "6 Months Service Warranty",
      features: ["MOBIL Oil", "Original Oil Filter", "All Fluids Top-up", "AC & Air Filter", "FREE Pickup & Drop", "Same Day Service"]
    },
    {
      id: "diagnostics",
      title: "Diagnostics Report",
      description: "A Full 360 Degree Diagnostics that covers Brakes, Suspension, Spark Plugs, Engine Oil, Brake Fluid, Coolant, Battery, Air Filter and other 50+ points checklist with detailed report.",
      price: 0,
      category: "car-service",
      features: ["360° Inspection", "50+ Point Check", "Detailed Report", "Professional Assessment"]
    },
    {
      id: "exterior-wash",
      title: "Exterior Car Wash",
      description: "Professional exterior washing with premium soap, tire cleaning, and protective wax coating.",
      price: 45,
      category: "car-wash",
      features: ["Exterior Wash", "Tire Cleaning", "Wax Coating"]
    },
    {
      id: "full-detailing",
      title: "Complete 3M Detailing",
      description: "Premium 3M products for paint correction, ceramic coating, and interior protection.",
      price: 850,
      category: "3m-detailing",
      warranty: "12 Months Protection",
      features: ["3M Products", "Paint Correction", "Ceramic Coating", "Interior Protection"]
    },
    {
      id: "battery-replacement",
      title: "Battery Replacement",
      description: "High-quality battery replacement with 2-year warranty and free installation.",
      price: 250,
      category: "battery",
      warranty: "2 Years Warranty",
      features: ["Premium Battery", "Free Installation", "Old Battery Disposal"]
    }
  ]

  const filteredServices = services.filter(service => {
    const matchesCategory = service.category === activeCategory
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const addToCart = (service: Service) => {
    const existingItem = cartItems.find(item => item.id === service.id)
    let newCartItems: CartItem[]

    if (existingItem) {
      newCartItems = cartItems.map(item =>
        item.id === service.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    } else {
      newCartItems = [...cartItems, { ...service, quantity: 1 }]
    }

    setCartItems(newCartItems)
    onCartUpdate(newCartItems)
  }

  const removeFromCart = (serviceId: string) => {
    const existingItem = cartItems.find(item => item.id === serviceId)
    let newCartItems: CartItem[]

    if (existingItem && existingItem.quantity > 1) {
      newCartItems = cartItems.map(item =>
        item.id === serviceId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    } else {
      newCartItems = cartItems.filter(item => item.id !== serviceId)
    }

    setCartItems(newCartItems)
    onCartUpdate(newCartItems)
  }

  const getItemQuantity = (serviceId: string) => {
    return cartItems.find(item => item.id === serviceId)?.quantity || 0
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
            <span className="text-white font-bold">{selectedCar.brand.charAt(0)}</span>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg">{selectedCar.brand} {selectedCar.model}</h3>
            <p className="text-sm text-muted-foreground">{selectedCar.year}</p>
          </div>
          <Button variant="outline" size="sm" className="ml-4">
            Change Car
          </Button>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Select a Category to explore our services</h2>
        <p className="text-muted-foreground">Choose from our premium car care services</p>
      </div>

      {/* Service Categories Carousel */}
      <div className="relative mb-8">
        <div className="flex items-center">
          <Button variant="outline" size="sm" className="mr-4 gradient-service text-white">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex-1 overflow-x-auto">
            <div className="flex gap-4 pb-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`flex-shrink-0 service-category ${
                    activeCategory === category.id ? "gradient-primary text-white" : ""
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          <Button variant="outline" size="sm" className="ml-4 gradient-service text-white">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Services List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="space-y-4">
            {filteredServices.map((service) => {
              const quantity = getItemQuantity(service.id)
              return (
                <Card key={service.id} className="service-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                          {quantity > 0 && (
                            <Badge variant="secondary" className="bg-accent text-accent-foreground">
                              Added
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                        
                        {service.features && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.features.map((feature, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {service.warranty && (
                          <p className="text-xs text-service-green font-medium mb-2">
                            ✓ {service.warranty}
                          </p>
                        )}
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground mb-4">
                          AED {service.price === 0 ? "0" : service.price.toFixed(1)}
                        </div>
                        
                        {quantity > 0 ? (
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeFromCart(service.id)}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="mx-2 font-semibold">{quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => addToCart(service)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        ) : (
                          <Button
                            onClick={() => addToCart(service)}
                            className="gradient-primary text-white"
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Add
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Cart Summary</h3>
              
              {cartItems.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No services selected</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold">AED {(item.price * item.quantity).toFixed(1)}</p>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center font-bold text-lg">
                      <span>Total</span>
                      <span>AED {getTotalPrice().toFixed(1)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {getTotalItems()} service{getTotalItems() !== 1 ? 's' : ''} selected
                    </p>
                  </div>

                  <Button 
                    onClick={onNext}
                    className="w-full gradient-primary text-white font-semibold mt-4"
                    disabled={cartItems.length === 0}
                  >
                    Continue to Location
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ServiceCategories