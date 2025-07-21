import { useState } from "react"
import { ChevronDown, Search } from "lucide-react"
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

interface CarBrand {
  id: string
  name: string
  logo?: string
}

interface CarSelectionProps {
  onCarSelect: (car: { brand: string; model: string; year: string }) => void
  onNext: () => void
}

const CarSelection = ({ onCarSelect, onNext }: CarSelectionProps) => {
  const [selectedBrand, setSelectedBrand] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedYear, setSelectedYear] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const carBrands: CarBrand[] = [
    { id: "audi", name: "Audi" },
    { id: "bmw", name: "BMW" },
    { id: "ford", name: "Ford" },
    { id: "gmc", name: "GMC" },
    { id: "honda", name: "Honda" },
    { id: "hyundai", name: "Hyundai" },
    { id: "infiniti", name: "Infiniti" },
    { id: "land-rover", name: "Land Rover" },
    { id: "lexus", name: "Lexus" },
    { id: "mercedes", name: "Mercedes-Benz" },
    { id: "nissan", name: "Nissan" },
    { id: "porsche", name: "Porsche" },
    { id: "toyota", name: "Toyota" },
    { id: "volkswagen", name: "Volkswagen" }
  ]

  const models = {
    audi: ["A3", "A4", "A6", "A8", "Q3", "Q5", "Q7", "Q8"],
    bmw: ["1 Series", "3 Series", "5 Series", "7 Series", "X1", "X3", "X5", "X7"],
    ford: ["Explorer", "F-150", "Mustang", "Edge", "Escape"],
    honda: ["Civic", "Accord", "CR-V", "Pilot", "Odyssey"],
    toyota: ["Camry", "Corolla", "RAV4", "Highlander", "Prius"],
    mercedes: ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "GLS"],
    // Add more models as needed
  }

  const years = Array.from({ length: 25 }, (_, i) => 2024 - i)

  const filteredBrands = carBrands.filter(brand =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleBrandSelect = (brandId: string) => {
    setSelectedBrand(brandId)
    setSelectedModel("")
    setSelectedYear("")
  }

  const handleSubmit = () => {
    if (selectedBrand && selectedModel && selectedYear) {
      const selectedBrandName = carBrands.find(b => b.id === selectedBrand)?.name || ""
      onCarSelect({
        brand: selectedBrandName,
        model: selectedModel,
        year: selectedYear
      })
      onNext()
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Select Your Car</h2>
        <p className="text-muted-foreground">Choose your car brand, model, and year to get personalized services</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Car Selection Form */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Vehicle Details</h3>
              
              {/* Dropdown Selection */}
              <div className="space-y-4 mb-6">
                <Select onValueChange={handleBrandSelect} value={selectedBrand}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Your Car Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {carBrands.map((brand) => (
                      <SelectItem key={brand.id} value={brand.id}>
                        {brand.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select 
                  onValueChange={setSelectedModel} 
                  value={selectedModel}
                  disabled={!selectedBrand}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Model" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedBrand && models[selectedBrand as keyof typeof models]?.map((model) => (
                      <SelectItem key={model} value={model}>
                        {model}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select 
                  onValueChange={setSelectedYear} 
                  value={selectedYear}
                  disabled={!selectedModel}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleSubmit} 
                className="w-full gradient-primary text-white font-semibold"
                disabled={!selectedBrand || !selectedModel || !selectedYear}
              >
                Continue to Services
              </Button>
            </CardContent>
          </Card>

          {/* Brand Search */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Select Brand</h3>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-3 max-h-64 overflow-y-auto">
                {filteredBrands.map((brand) => (
                  <Button
                    key={brand.id}
                    variant={selectedBrand === brand.id ? "default" : "outline"}
                    className={`p-4 h-auto flex flex-col items-center justify-center text-center ${
                      selectedBrand === brand.id ? "gradient-primary text-white" : ""
                    }`}
                    onClick={() => handleBrandSelect(brand.id)}
                  >
                    <div className="w-8 h-8 rounded-full bg-muted mb-2 flex items-center justify-center">
                      <span className="text-xs font-bold">
                        {brand.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-xs font-medium">{brand.name}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Car Preview */}
        <div className="flex items-center justify-center">
          <Card className="w-full">
            <CardContent className="p-12 flex flex-col items-center justify-center text-center">
              {selectedBrand && selectedModel && selectedYear ? (
                <div className="space-y-4">
                  <div className="w-32 h-32 rounded-full gradient-primary flex items-center justify-center mx-auto">
                    <span className="text-4xl font-bold text-white">
                      {carBrands.find(b => b.id === selectedBrand)?.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {carBrands.find(b => b.id === selectedBrand)?.name} {selectedModel}
                    </h3>
                    <p className="text-lg text-muted-foreground">{selectedYear}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Ready for personalized services
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center mx-auto">
                    <span className="text-4xl text-muted-foreground">?</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Please Select A Car</h3>
                    <p className="text-muted-foreground">Choose your vehicle to continue</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CarSelection