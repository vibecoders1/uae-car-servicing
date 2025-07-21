import { Link } from "react-router-dom"
import { ArrowLeft, Download, Smartphone, Star, Shield, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"

const MobileApp = () => {
  const features = [
    {
      icon: "📱",
      title: "Easy Booking",
      description: "Book services in just a few taps"
    },
    {
      icon: "🔔",
      title: "Real-time Updates",
      description: "Get notified about your service status"
    },
    {
      icon: "💳",
      title: "Secure Payments",
      description: "Multiple payment options available"
    },
    {
      icon: "📍",
      title: "Location Tracking",
      description: "Track your service provider in real-time"
    },
    {
      icon: "🎁",
      title: "Exclusive Offers",
      description: "Access app-only deals and discounts"
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Get help whenever you need it"
    }
  ]

  const testimonials = [
    {
      name: "Ahmed Al-Mansouri",
      rating: 5,
      comment: "The app makes booking so convenient. Love the real-time tracking!"
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Best car service app in UAE. Highly recommended!"
    },
    {
      name: "Omar Hassan",
      rating: 5,
      comment: "Professional service and user-friendly app interface."
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
            <h1 className="text-3xl font-bold text-foreground">Mobile App</h1>
            <p className="text-muted-foreground">Download our app for the best experience</p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              ⭐ Coming Soon to App Stores
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience Car Care
              <span className="block gradient-primary bg-clip-text text-transparent">
                On The Go
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book, track, and manage all your car services from your mobile device. 
              Get exclusive app-only deals and real-time updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white">
                <Download className="w-5 h-5 mr-2" />
                Download for iOS
              </Button>
              <Button size="lg" variant="outline">
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </Button>
            </div>
          </div>
        </div>

        {/* App Preview */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-48 h-96 mx-auto bg-gradient-to-b from-card to-muted rounded-3xl border-8 border-border flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">App Preview</p>
                    <p className="text-xs text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Sleek & Intuitive Design</h3>
                <p className="text-muted-foreground">
                  Our app is designed with UAE users in mind, featuring an elegant interface 
                  that makes car service booking effortless.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">App Features</h2>
            <p className="text-muted-foreground">Everything you need for seamless car care</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="service-card text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">100K+</div>
                  <div className="text-sm text-muted-foreground">Downloads Expected</div>
                </div>
                <div>
                  <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">4.8★</div>
                  <div className="text-sm text-muted-foreground">Expected Rating</div>
                </div>
                <div>
                  <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-muted-foreground">Secure</div>
                </div>
                <div>
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Users Will Say</h2>
            <p className="text-muted-foreground">Anticipated feedback from our valued customers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.comment}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card>
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8">
                Be the first to know when our app launches. Sign up for early access!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-2 border rounded-lg flex-1"
                />
                <Button className="gradient-primary text-white">
                  Notify Me
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default MobileApp