import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Writing from "./pages/Writing";
import BuildingUncomfortableSpaces from "./pages/articles/BuildingUncomfortableSpaces";
import MediciModel from "./pages/articles/MediciModel";
import ArchitectureOfAttention from "./pages/articles/ArchitectureOfAttention";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/building-uncomfortable-spaces" element={<BuildingUncomfortableSpaces />} />
          <Route path="/writing/medici-model-venture-capital" element={<MediciModel />} />
          <Route path="/writing/architecture-of-attention" element={<ArchitectureOfAttention />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
