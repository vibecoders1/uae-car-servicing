import { useState } from "react"
import { CreditCard, Phone, DollarSign, MapPin, Calendar, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
}

interface ScheduleDetails {
  date: string
  time: string
  location: string
  vehicleNumber: string
}

interface SelectedCar {
  brand: string
  model: string
  year: string
}

interface CheckoutProps {
  cartItems: CartItem[]
  schedule: ScheduleDetails
  selectedCar: SelectedCar
  onOrderComplete: () => void
}

const Checkout = ({ cartItems, schedule, selectedCar, onOrderComplete }: CheckoutProps) => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<"tabby" | "online">()
  const [voucherCode, setVoucherCode] = useState("")
  const [additionalNotes, setAdditionalNotes] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast } = useToast()

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getTaxAmount = () => {
    return getTotalPrice() * 0.05
  }

  const getFinalTotal = () => {
    return getTotalPrice() + getTaxAmount()
  }

  const handleApplyVoucher = () => {
    if (voucherCode.trim()) {
      toast({
        title: "Voucher Applied",
        description: "Your discount has been applied successfully.",
      })
    }
  }

  const handlePlaceOrder = async () => {
    if (!phoneNumber || !paymentMethod) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      })
      return
    }

    setIsProcessing(true)
    
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false)
      toast({
        title: "Order Placed Successfully!",
        description: "You will receive a confirmation SMS shortly.",
      })
      onOrderComplete()
    }, 2000)
  }

  const isFormValid = phoneNumber && paymentMethod

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Checkout</h2>
        <p className="text-muted-foreground">Review your order and complete payment</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Account & Payment */}
        <div className="lg:col-span-2 space-y-6">
          {/* Account */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Account
              </h3>
              
              <div className="space-y-4">
                <div>
                  <Input
                    placeholder="Enter Phone No."
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    To place an order, please login into your existing account or if you are a new user, please sign-up.
                  </p>
                </div>
                <Button className="gradient-service text-white">
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Selected Car */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Car className="w-5 h-5" />
                Selected Car
              </h3>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{selectedCar.brand.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{selectedCar.brand} {selectedCar.model}</h4>
                  <p className="text-muted-foreground">{selectedCar.year}</p>
                </div>
                <Button variant="outline" size="sm" className="ml-auto">
                  Change Car
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Schedule */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Address</label>
                  <p className="text-sm mt-1">{schedule.location}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Date and Time</label>
                  <p className="text-sm mt-1">{schedule.date} at {schedule.time}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <label className="text-sm font-medium text-muted-foreground">Your Vehicle Number Plate</label>
                <p className="text-sm mt-1 font-mono">{schedule.vehicleNumber}</p>
              </div>
            </CardContent>
          </Card>

          {/* Service Order Details */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Service Order Details</h3>
              
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">AED {(item.price * item.quantity).toFixed(1)}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment & Summary */}
        <div className="space-y-6">
          {/* Payment Method */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Select Payment Method
              </h3>
              
              <div className="space-y-3">
                <button
                  onClick={() => setPaymentMethod("tabby")}
                  className={`w-full p-4 border rounded-lg text-left transition-all ${
                    paymentMethod === "tabby" 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-6 h-6 text-service-yellow" />
                      <span className="font-medium">Tabby (BNPL)</span>
                    </div>
                    {paymentMethod === "tabby" && (
                      <div className="w-4 h-4 rounded-full bg-accent"></div>
                    )}
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod("online")}
                  className={`w-full p-4 border rounded-lg text-left transition-all ${
                    paymentMethod === "online" 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-6 h-6 text-service-blue" />
                      <span className="font-medium">Online card payment</span>
                    </div>
                    {paymentMethod === "online" && (
                      <div className="w-4 h-4 rounded-full bg-accent"></div>
                    )}
                  </div>
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Voucher */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Apply coupon / voucher</h3>
              
              <div className="flex gap-2">
                <Input
                  placeholder="Enter Voucher Code Here"
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  onClick={handleApplyVoucher}
                  className="gradient-service text-white"
                >
                  Apply
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sub-Total</span>
                  <span className="font-semibold">AED {getTotalPrice().toFixed(1)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total</span>
                  <span className="font-semibold">AED {getTotalPrice().toFixed(1)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Taxes</span>
                  <span className="font-semibold">AED {getTaxAmount().toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Final Total</span>
                    <span>AED {getFinalTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Textarea
                  placeholder="Additional Notes / Information"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className="mb-4"
                />
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  Previous
                </Button>
                <Button 
                  onClick={handlePlaceOrder}
                  disabled={!isFormValid || isProcessing}
                  className="flex-1 gradient-primary text-white font-semibold"
                >
                  {isProcessing ? "Processing..." : "Place Order"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Checkout