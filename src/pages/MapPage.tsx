
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

const MapPage = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // This is a mock implementation. In a real app, you would use the Google Maps API
    // with proper API key and configuration
    if (mapRef.current) {
      const mockMapLoad = setTimeout(() => {
        setMapLoaded(true);
      }, 1000);

      return () => clearTimeout(mockMapLoad);
    }
  }, []);

  const startJourney = () => {
    console.log("Start Journey");
    // Implementation would go here
  };

  return (
    <PageLayout>
      <div className="flex flex-col h-[80vh] relative">
        <div className="h-full w-full bg-gray-200 rounded-lg shadow-elevation overflow-hidden">
          <div ref={mapRef} className="h-full w-full relative">
            {!mapLoaded ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              // Mock map content
              <div className="h-full w-full bg-[#e8eaed] relative">
                {/* Mock road */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-400"></div>
                
                {/* Mock markers */}
                <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 bg-primary rounded-full shadow-md"></div>
                  <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap bg-white px-2 py-1 rounded shadow-sm">
                    My Current Location
                  </div>
                </div>
                
                <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 translate-x-1/2">
                  <div className="w-4 h-4 bg-success rounded-full shadow-md"></div>
                  <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap bg-white px-2 py-1 rounded shadow-sm">
                    Wheel Location
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={startJourney}
          className="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors"
        >
          <Play size={24} />
        </button>
      </div>
    </PageLayout>
  );
};

export default MapPage;
