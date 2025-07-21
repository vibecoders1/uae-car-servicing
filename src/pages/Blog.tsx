import { Link } from "react-router-dom"
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Essential Car Maintenance Tips for UAE Climate",
      excerpt: "Learn how to protect your vehicle from the harsh UAE weather conditions with these essential maintenance tips.",
      author: "Ahmed Al-Mansouri",
      date: "2024-01-15",
      category: "Maintenance",
      readTime: "5 min read",
      image: "🌡️"
    },
    {
      id: 2,
      title: "When to Replace Your Car Battery in Dubai",
      excerpt: "Signs that indicate your car battery needs replacement and how to choose the right battery for your vehicle.",
      author: "Sarah Johnson",
      date: "2024-01-10",
      category: "Battery Care",
      readTime: "4 min read",
      image: "🔋"
    },
    {
      id: 3,
      title: "The Benefits of 3M Paint Protection for UAE Cars",
      excerpt: "Discover why 3M paint protection is essential for maintaining your car's appearance in the UAE.",
      author: "Mohammed Khan",
      date: "2024-01-08",
      category: "Protection",
      readTime: "6 min read",
      image: "🛡️"
    },
    {
      id: 4,
      title: "Complete Guide to Car Washing in Dubai",
      excerpt: "Best practices for washing your car in Dubai's dusty environment and choosing the right products.",
      author: "Lisa Rodriguez",
      date: "2024-01-05",
      category: "Car Wash",
      readTime: "7 min read",
      image: "🚿"
    },
    {
      id: 5,
      title: "Emergency Car Services: What to Do When Stranded",
      excerpt: "A comprehensive guide on handling car emergencies in the UAE and when to call for professional help.",
      author: "Omar Hassan",
      date: "2024-01-03",
      category: "Emergency",
      readTime: "5 min read",
      image: "🚨"
    },
    {
      id: 6,
      title: "Monthly Car Service Plans: Are They Worth It?",
      excerpt: "Analyzing the benefits and cost-effectiveness of monthly car service packages for UAE residents.",
      author: "Fatima Al-Zahra",
      date: "2024-01-01",
      category: "Service Plans",
      readTime: "4 min read",
      image: "📅"
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
            <h1 className="text-3xl font-bold text-foreground">Car Care Blog</h1>
            <p className="text-muted-foreground">Tips, guides, and insights for car owners in the UAE</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="service-card hover-scale">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{post.image}</div>
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-foreground">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full group">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="gradient-primary text-white">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Blog