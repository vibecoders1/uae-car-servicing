import { Link } from "react-router-dom"
import { ArrowLeft, Users, Star, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"

const About = () => {
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
            <h1 className="text-3xl font-bold text-foreground">About UAE Car Servicing</h1>
            <p className="text-muted-foreground">Your trusted car care partner in the UAE</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                UAE Car Servicing was founded with a simple mission: to provide exceptional car care services 
                that fit the busy lifestyle of UAE residents. We understand that your time is valuable, and 
                your car deserves the best care possible.
              </p>
              <p>
                Since our inception, we've served over 100,000 customers across the UAE, building a reputation 
                for quality, reliability, and convenience. Our team of certified technicians brings years of 
                experience to every service.
              </p>
              <p>
                We believe in transparency, quality workmanship, and customer satisfaction. Every service comes 
                with our warranty and is performed using premium products and state-of-the-art equipment.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Why Choose Us?</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">100K+</h3>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Star className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">4.5★</h3>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Warranty</h3>
                  <p className="text-sm text-muted-foreground">All Services</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Certified</h3>
                  <p className="text-sm text-muted-foreground">Technicians</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                "To revolutionize car care in the UAE by providing convenient, high-quality, and affordable 
                automotive services that save our customers time while ensuring their vehicles receive the 
                best possible care."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default About