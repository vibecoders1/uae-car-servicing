import { useState } from "react"
import { Calendar, Clock, MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
}

interface LocationSelectionProps {
  cartItems: CartItem[]
  onNext: () => void
  onScheduleUpdate: (schedule: { date: string; time: string; location: string; vehicleNumber: string }) => void
}

const LocationSelection = ({ cartItems, onNext, onScheduleUpdate }: LocationSelectionProps) => {
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [vehicleNumber, setVehicleNumber] = useState("")
  const [searchLocation, setSearchLocation] = useState("")

  const popularLocations = [
    "Muteena - Dubai - United Arab Emirates",
    "Dubai Marina - Dubai",
    "Downtown Dubai - Dubai",
    "Jumeirah Beach Residence - Dubai",
    "Business Bay - Dubai",
    "Deira - Dubai",
    "Bur Dubai - Dubai",
    "Al Barsha - Dubai"
  ]

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
    "05:00 PM", "06:00 PM", "07:00 PM"
  ]

  const generateDateOptions = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('en-US', { 
          weekday: 'long', 
          month: 'long', 
          day: 'numeric' 
        })
      })
    }
    return dates
  }

  const dateOptions = generateDateOptions()

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleSubmit = () => {
    if (selectedLocation && selectedDate && selectedTime && vehicleNumber) {
      onScheduleUpdate({
        date: selectedDate,
        time: selectedTime,
        location: selectedLocation,
        vehicleNumber: vehicleNumber
      })
      onNext()
    }
  }

  const isFormValid = selectedLocation && selectedDate && selectedTime && vehicleNumber

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Select a Category to explore our services</h2>
        <p className="text-muted-foreground">Choose your preferred location and schedule</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Location & Schedule */}
        <div className="space-y-6">
          {/* Location Search */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Search Your Location
              </h3>
              
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Enter your location..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-service-blue/20 to-service-pink/20"></div>
                <div className="relative text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Location: {selectedLocation || "Select location"}</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Popular Locations:</p>
                {popularLocations.slice(0, 3).map((location) => (
                  <Button
                    key={location}
                    variant={selectedLocation === location ? "default" : "outline"}
                    className={`w-full text-left justify-start text-sm ${
                      selectedLocation === location ? "gradient-primary text-white" : ""
                    }`}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    {location}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schedule & Vehicle Details */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Select Schedule
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Schedule Your Service</label>
                  <Select onValueChange={setSelectedDate} value={selectedDate}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Date" />
                    </SelectTrigger>
                    <SelectContent>
                      {dateOptions.map((date) => (
                        <SelectItem key={date.value} value={date.value}>
                          {date.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Select onValueChange={setSelectedTime} value={selectedTime}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Your Vehicle Number Plate</label>
                  <Input
                    placeholder="e.g., D1H200"
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                    className="font-mono"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Summary */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Service Summary</h3>
              
              <div className="space-y-3 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">AED {(item.price * item.quantity).toFixed(1)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sub-Total</span>
                  <span className="font-semibold">AED {getTotalPrice().toFixed(1)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Taxes</span>
                  <span className="font-semibold">AED {(getTotalPrice() * 0.05).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
                  <span>Final Total</span>
                  <span>AED {(getTotalPrice() * 1.05).toFixed(2)}</span>
                </div>
              </div>

              {selectedDate && selectedTime && (
                <div className="mt-4 p-3 bg-accent/20 rounded-lg">
                  <p className="text-sm font-medium text-accent-foreground">Scheduled Service</p>
                  <p className="text-xs text-muted-foreground">
                    {dateOptions.find(d => d.value === selectedDate)?.label} at {selectedTime}
                  </p>
                  {vehicleNumber && (
                    <p className="text-xs text-muted-foreground">Vehicle: {vehicleNumber}</p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button variant="outline" className="flex-1">
              Previous
            </Button>
            <Button 
              onClick={handleSubmit}
              disabled={!isFormValid}
              className="flex-1 gradient-primary text-white font-semibold"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationSelection