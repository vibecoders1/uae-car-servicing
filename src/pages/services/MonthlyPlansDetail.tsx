import { Link } from "react-router-dom"
import { ArrowLeft, Star, Clock, Shield, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"

const MonthlyPlansDetail = () => {
  const monthlyPlans = [
    {
      name: "Basic Plan",
      price: 99,
      duration: "Monthly",
      features: ["1x Car Wash", "Basic Inspection", "Fluid Top-up", "Priority Booking"]
    },
    {
      name: "Standard Plan",
      price: 199,
      duration: "Monthly",
      features: ["2x Car Wash", "Oil Change", "Filter Replacement", "Battery Check", "Tire Rotation"]
    },
    {
      name: "Premium Plan",
      price: 299,
      duration: "Monthly",
      features: ["4x Car Wash", "Full Service", "Emergency Support", "Pick & Drop", "Detailed Reports"]
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
            <h1 className="text-3xl font-bold text-foreground">Monthly Service Plans</h1>
            <p className="text-muted-foreground">Affordable monthly service packages</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Calendar className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h2 className="text-2xl font-bold mb-4">Monthly Service Subscriptions</h2>
                  <p className="text-muted-foreground">
                    Save money and keep your car in perfect condition with our convenient monthly service plans. 
                    Choose from flexible packages designed to meet your specific needs and budget.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">Cost Savings</h3>
                    <p className="text-sm text-muted-foreground">Save up to 30% vs individual services</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">Convenience</h3>
                    <p className="text-sm text-muted-foreground">Automatic scheduling</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">Priority Service</h3>
                    <p className="text-sm text-muted-foreground">Skip the queue</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Plan Benefits:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Significant cost savings compared to individual services</li>
                    <li>• Priority booking and faster service times</li>
                    <li>• Flexible scheduling to fit your calendar</li>
                    <li>• Comprehensive vehicle maintenance tracking</li>
                    <li>• No hidden fees or surprise charges</li>
                    <li>• Cancel or modify your plan anytime</li>
                    <li>• Digital service history and reports</li>
                    <li>• Dedicated customer support</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Packages */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Choose Your Plan</h2>
            <div className="space-y-4">
              {monthlyPlans.map((plan, index) => (
                <Card key={index} className="hover-scale">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                      <div className="text-2xl font-bold text-primary mb-2">AED {plan.price}</div>
                      <Badge variant="secondary" className="mb-4">
                        <Calendar className="w-3 h-3 mr-1" />
                        {plan.duration}
                      </Badge>
                      
                      <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                        {plan.features.map((feature, i) => (
                          <li key={i}>• {feature}</li>
                        ))}
                      </ul>
                      
                      <Button className="w-full gradient-primary text-white">
                        Subscribe Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-accent/10 border-accent/20">
              <CardContent className="p-6 text-center">
                <Star className="w-8 h-8 mx-auto mb-2 text-accent" />
                <h3 className="font-semibold text-accent-foreground mb-2">Special Offer</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Subscribe to any plan and get your first month at 50% off!
                </p>
                <Badge variant="secondary">Limited Time</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonthlyPlansDetail