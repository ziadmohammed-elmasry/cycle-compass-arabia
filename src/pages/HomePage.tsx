
import { useState, useEffect } from "react";
import { RefreshCw, Check, X, Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import PageLayout from "@/components/layout/PageLayout";

type ConnectionStatus = "searching" | "connected" | "not_found";

const HomePage = () => {
  const [status, setStatus] = useState<ConnectionStatus>("searching");
  const [isSearching, setIsSearching] = useState(true);

  useEffect(() => {
    if (isSearching) {
      setStatus("searching");
      const timer = setTimeout(() => {
        // Simulate finding a connection 70% of the time
        const result = Math.random() > 0.3 ? "connected" : "not_found";
        setStatus(result);
        setIsSearching(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSearching]);

  const handleSearch = () => {
    setIsSearching(true);
  };

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <div className="relative mb-8">
          {/* Animated wheel with spokes */}
          <div
            className={cn(
              "w-48 h-48 rounded-full border-8 border-gray-300 relative",
              {
                "animate-wheel-spin": status === "searching",
                "border-success": status === "connected",
                "border-destructive": status === "not_found",
              }
            )}
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "absolute w-1 h-20 bg-gray-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-bottom",
                  {
                    "bg-success": status === "connected",
                    "bg-destructive": status === "not_found",
                  }
                )}
                style={{
                  transform: `translateX(-50%) translateY(-100%) rotate(${i * 45}deg)`,
                }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <StatusIcon status={status} />
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p
            className={cn("text-lg font-bold mb-2", {
              "text-gray-500": status === "searching",
              "text-success": status === "connected",
              "text-destructive": status === "not_found",
            })}
          >
            {status === "searching" && "جارٍ البحث"}
            {status === "connected" && "تم الاتصال"}
            {status === "not_found" && "مش لاقي حاجة"}
          </p>
        </div>

        {!isSearching && (
          <button
            onClick={handleSearch}
            className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors animate-fade-in"
          >
            <RefreshCw size={24} />
          </button>
        )}
        {!isSearching && (
          <p className="mt-4 text-gray-500 text-center animate-fade-in">اضغط على الزر للبحث تاني</p>
        )}
      </div>
    </PageLayout>
  );
};

const StatusIcon = ({ status }: { status: ConnectionStatus }) => {
  if (status === "searching") {
    return <Loader className="w-8 h-8 text-gray-500 animate-spin" />;
  } else if (status === "connected") {
    return <Check className="w-10 h-10 text-success" />;
  } else {
    return <X className="w-10 h-10 text-destructive" />;
  }
};

export default HomePage;
