import { ErrorBoundary } from 'react-error-boundary';
import HeroSection from '@/components/HeroSection';
import ArtistsSection from '@/components/ArtistsSection';
import InfoSection from '@/components/InfoSection';
import TicketsSection from '@/components/TicketsSection';
import Footer from '@/components/Footer';

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

const Index = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="min-h-screen bg-black">
        <HeroSection />
        <ArtistsSection />
        <InfoSection />
        <TicketsSection />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Index;
