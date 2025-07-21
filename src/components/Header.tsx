import { Moon, Sun, Car, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"
import { useState } from "react"
import { Link } from "react-router-dom"
import CartDropdown from "./CartDropdown"

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

interface HeaderProps {
  cartItems?: CartItem[]
  onUpdateQuantity?: (id: string, quantity: number) => void
  onRemoveItem?: (id: string) => void
  onClearCart?: () => void
}

const Header = ({ cartItems = [], onUpdateQuantity, onRemoveItem, onClearCart }: HeaderProps) => {
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Mobile App", href: "/mobile-app" }
  ]

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg gradient-primary">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">UAE CAR SERVICING</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Smart Service Platform</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <CartDropdown
              cartItems={cartItems}
              cartCount={cartCount}
              onUpdateQuantity={onUpdateQuantity || (() => {})}
              onRemoveItem={onRemoveItem || (() => {})}
              onClearCart={onClearCart || (() => {})}
            />

            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Login */}
            <Button variant="default" size="sm" className="hidden sm:flex">
              Login
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium py-2 px-4 rounded-md transition-colors hover:bg-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="default" size="sm" className="mx-4 mt-2">
                Login
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header