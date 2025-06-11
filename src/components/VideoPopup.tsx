import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackVideoView } from '@/lib/analytics-events';

interface VideoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoPopup = ({ isOpen, onClose, videoUrl }: VideoPopupProps) => {
  if (!isOpen) return null;

  // Track video view when popup opens
  try {
    trackVideoView('aftermovie');
  } catch (error) {
    console.warn('Failed to track video view:', error);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-4xl mx-4">
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute -top-12 right-0 text-white hover:text-festival-cyan"
        >
          <X className="w-6 h-6" />
        </Button>
        <div className="bg-black/20 rounded-lg p-1 shadow-2xl">
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full rounded-lg"
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPopup; 