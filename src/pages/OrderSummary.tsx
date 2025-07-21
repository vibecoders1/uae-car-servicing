import { Link } from "react-router-dom"
import { ArrowLeft, CheckCircle, Calendar, MapPin, Car, Phone, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"

const OrderSummary = () => {
  // Mock order data - in real app this would come from state/props
  const orderData = {
    orderNumber: "UAE-CS-2024-001523",
    orderDate: "January 21, 2024",
    status: "Confirmed",
    car: {
      brand: "BMW",
      model: "X5",
      year: "2022"
    },
    schedule: {
      date: "January 25, 2024",
      time: "10:00 AM",
      location: "Deira - Dubai, United Arab Emirates",
      vehicleNumber: "D1H200"
    },
    services: [
      {
        id: "1",
        title: "Premium Car Wash",
        category: "Car Wash",
        price: 45,
        quantity: 1
      },
      {
        id: "2",
        title: "Oil Change Service",
        category: "Car Service",
        price: 120,
        quantity: 1
      }
    ],
    contact: {
      phone: "+971 50 123 4567",
      email: "customer@example.com"
    },
    pricing: {
      subtotal: 165,
      tax: 8.25,
      total: 173.25
    }
  }

  const handleDownloadReceipt = () => {
    // In a real app, this would generate and download a PDF receipt
    console.log("Downloading receipt...")
  }

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
        </div>

        {/* Success Header */}
        <div className="text-center mb-8">
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
          <h1 className="text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground">Your car service has been successfully booked</p>
          <Badge variant="secondary" className="mt-4">
            Order #{orderData.orderNumber}
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Service Summary */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Service Summary</h2>
                <div className="space-y-4">
                  {orderData.services.map((service) => (
                    <div key={service.id} className="flex justify-between items-center border-b pb-3">
                      <div>
                        <h3 className="font-medium">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.category}</p>
                        <p className="text-sm text-muted-foreground">Quantity: {service.quantity}</p>
                      </div>
                      <p className="font-semibold">AED {service.price.toFixed(1)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Schedule Details */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule Details
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Date & Time</label>
                    <p className="text-sm mt-1">{orderData.schedule.date} at {orderData.schedule.time}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Vehicle Number</label>
                    <p className="text-sm mt-1 font-mono">{orderData.schedule.vehicleNumber}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-sm font-medium text-muted-foreground">Service Location</label>
                  <p className="text-sm mt-1 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {orderData.schedule.location}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Details */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  Vehicle Details
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{orderData.car.brand.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{orderData.car.brand} {orderData.car.model}</h3>
                    <p className="text-muted-foreground">{orderData.car.year}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary & Actions */}
          <div className="space-y-6">
            {/* Order Status */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Status</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Order Date</span>
                    <span className="text-sm">{orderData.orderDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {orderData.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Summary */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Pricing Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Subtotal</span>
                    <span className="text-sm">AED {orderData.pricing.subtotal.toFixed(1)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Tax (5%)</span>
                    <span className="text-sm">AED {orderData.pricing.tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-semibold text-lg">AED {orderData.pricing.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{orderData.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{orderData.contact.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="space-y-3">
              <Button 
                onClick={handleDownloadReceipt}
                className="w-full gradient-primary text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Receipt
              </Button>
              <Button variant="outline" className="w-full">
                Track Your Service
              </Button>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <Card className="mt-8">
          <CardContent className="p-8">
            <h2 className="text-xl font-semibold mb-4">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Confirmation SMS</h3>
                <p className="text-sm text-muted-foreground">You'll receive a confirmation SMS with all details</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Service Day</h3>
                <p className="text-sm text-muted-foreground">Our technician will arrive at your location</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Service Complete</h3>
                <p className="text-sm text-muted-foreground">Get your car back in perfect condition</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default OrderSummary