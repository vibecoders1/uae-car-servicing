import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Services from "./pages/Services"; 
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import MobileApp from "./pages/MobileApp";
import CarWashDetail from "./pages/services/CarWashDetail";
import CarServiceDetail from "./pages/services/CarServiceDetail";
import ProtectionDetail from "./pages/services/ProtectionDetail";
import BatteryDetail from "./pages/services/BatteryDetail";
import EmergencyDetail from "./pages/services/EmergencyDetail";
import MonthlyPlansDetail from "./pages/services/MonthlyPlansDetail";
import OrderSummary from "./pages/OrderSummary";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mobile-app" element={<MobileApp />} />
            <Route path="/services/car-wash" element={<CarWashDetail />} />
            <Route path="/services/car-service" element={<CarServiceDetail />} />
            <Route path="/services/protection" element={<ProtectionDetail />} />
            <Route path="/services/battery" element={<BatteryDetail />} />
            <Route path="/services/emergency" element={<EmergencyDetail />} />
            <Route path="/services/monthly-plans" element={<MonthlyPlansDetail />} />
            <Route path="/order-summary" element={<OrderSummary />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
