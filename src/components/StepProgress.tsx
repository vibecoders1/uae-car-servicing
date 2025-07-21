import { Check, Car, Settings, MapPin, CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"

type Step = {
  id: number
  title: string
  icon: React.ComponentType<any>
  status: "completed" | "active" | "inactive"
}

interface StepProgressProps {
  currentStep: number
}

const StepProgress = ({ currentStep }: StepProgressProps) => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Select Car",
      icon: Car,
      status: currentStep > 1 ? "completed" : currentStep === 1 ? "active" : "inactive"
    },
    {
      id: 2,
      title: "Select Services",
      icon: Settings,
      status: currentStep > 2 ? "completed" : currentStep === 2 ? "active" : "inactive"
    },
    {
      id: 3,
      title: "Select Location",
      icon: MapPin,
      status: currentStep > 3 ? "completed" : currentStep === 3 ? "active" : "inactive"
    },
    {
      id: 4,
      title: "Checkout",
      icon: CreditCard,
      status: currentStep === 4 ? "active" : "inactive"
    }
  ]

  return (
    <div className="w-full py-8">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 h-0.5 bg-muted w-full -translate-y-1/2 z-0">
          <div 
            className="h-full bg-gradient-primary transition-all duration-500 ease-in-out"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {/* Steps */}
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={step.id} className="flex flex-col items-center relative z-10">
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                  {
                    "bg-primary border-primary text-primary-foreground": step.status === "active",
                    "bg-accent border-accent text-accent-foreground": step.status === "completed",
                    "bg-background border-muted text-muted-foreground": step.status === "inactive"
                  }
                )}
              >
                {step.status === "completed" ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Icon className="w-5 h-5" />
                )}
              </div>
              <span 
                className={cn(
                  "text-sm font-medium mt-2 transition-colors duration-300",
                  {
                    "text-primary": step.status === "active",
                    "text-accent": step.status === "completed",
                    "text-muted-foreground": step.status === "inactive"
                  }
                )}
              >
                {step.title}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StepProgress