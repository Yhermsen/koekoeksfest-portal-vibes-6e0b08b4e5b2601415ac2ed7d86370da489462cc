import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TimetablePage from "./pages/TimetablePage";
import Navigation from "./components/Navigation";
import InfoPage from "./pages/InfoPage";
import ArtistsPage from "./pages/ArtistsPage";
import Breadcrumbs from "./components/Breadcrumbs";
import { useAnalytics } from "./hooks/useAnalytics";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient();

// Error fallback component
const ErrorFallback = ({ error }: { error: Error }) => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
      <pre className="bg-gray-800 p-4 rounded-lg overflow-auto">
        {error.message}
      </pre>
    </div>
  );
};

// Router content component that uses useAnalytics
const RouterContent = () => {
  // Initialize analytics
  useAnalytics();

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black">
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={
            <>
              <Helmet>
                <title>Ut' Koekoeksfest 2025 - Hardstyle Festival Siebengewald | 5 Juli</title>
                <meta name="description" content="Beleef het ultieme hardstyle festival op 5 juli 2025 in Siebengewald. Ut' Koekoeksfest presenteert de beste hardstyle artiesten, spektakel en onvergetelijke momenten." />
              </Helmet>
              <Index />
            </>
          } />
          <Route path="/timetable" element={
            <>
              <Helmet>
                <title>Timetable - Ut' Koekoeksfest 2025</title>
                <meta name="description" content="Bekijk het volledige programma van Ut' Koekoeksfest 2025. Alle artiesten en tijden op één overzichtelijke timetable." />
              </Helmet>
              <TimetablePage />
            </>
          } />
          <Route path="/info" element={
            <>
              <Helmet>
                <title>Praktische Informatie - Ut' Koekoeksfest 2025</title>
                <meta name="description" content="Alle praktische informatie over Ut' Koekoeksfest 2025: locatie, vervoer, regels en meer." />
              </Helmet>
              <InfoPage />
            </>
          } />
          <Route path="/artists" element={
            <>
              <Helmet>
                <title>Artiesten Line-up - Ut' Koekoeksfest 2025</title>
                <meta name="description" content="Ontdek de volledige line-up van Ut' Koekoeksfest 2025. De beste hardstyle en hardcore acts op één podium." />
              </Helmet>
              <ArtistsPage />
            </>
          } />
          <Route path="*" element={
            <>
              <Helmet>
                <title>Pagina Niet Gevonden - Ut' Koekoeksfest 2025</title>
                <meta name="robots" content="noindex, follow" />
              </Helmet>
              <NotFound />
            </>
          } />
        </Routes>
      </div>
    </>
  );
};

const AppContent = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouterContent />
        </BrowserRouter>
      </TooltipProvider>
    </ErrorBoundary>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AppContent />
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
