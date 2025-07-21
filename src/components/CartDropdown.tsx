import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"

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

interface CartDropdownProps {
  cartItems: CartItem[]
  cartCount: number
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemoveItem: (id: string) => void
  onClearCart: () => void
}

const CartDropdown = ({ 
  cartItems, 
  cartCount, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart 
}: CartDropdownProps) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleQuantityChange = (id: string, change: number) => {
    const item = cartItems.find(item => item.id === id)
    if (item) {
      const newQuantity = Math.max(0, item.quantity + change)
      if (newQuantity === 0) {
        onRemoveItem(id)
      } else {
        onUpdateQuantity(id, newQuantity)
      }
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="relative">
          <ShoppingCart className="w-4 h-4" />
          {cartCount > 0 && (
            <Badge 
              variant="secondary" 
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent"
            >
              {cartCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 max-h-96 overflow-y-auto bg-background border shadow-lg">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">Cart Items ({cartCount})</h3>
            {cartItems.length > 0 && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onClearCart}
                className="text-destructive"
              >
                Clear All
              </Button>
            )}
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="p-3">
                  <CardContent className="p-0">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{item.category}</p>
                        <p className="font-semibold text-primary">AED {item.price.toFixed(1)}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-destructive p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      <p className="font-semibold">AED {(item.price * item.quantity).toFixed(1)}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-bold text-lg">AED {getTotalPrice().toFixed(1)}</span>
                </div>
                <Button className="w-full gradient-primary text-white">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CartDropdown