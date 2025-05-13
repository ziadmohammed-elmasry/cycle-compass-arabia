
import { useState, useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const SensorsPage = () => {
  const [speed, setSpeed] = useState(0);
  const [battery, setBattery] = useState(75);
  const [temperature, setTemperature] = useState(45);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Simulate sensor data updates every 3 seconds
    const interval = setInterval(() => {
      setSpeed(Math.floor(Math.random() * 30));
      setBattery((prev) => Math.max(Math.min(prev + Math.floor(Math.random() * 5) - 2, 100), 0));
      setTemperature(Math.floor(Math.random() * 50) + 30);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout title="Sensors">
      <div className="grid grid-cols-2 gap-4">
        <SensorCard title="Speed">
          <div className="flex flex-col items-center">
            <SpeedGauge speed={speed} />
            <div className="mt-2 text-2xl font-bold">{speed} <span className="text-sm">km/h</span></div>
          </div>
        </SensorCard>

        <SensorCard title="Battery">
          <div className="flex flex-col items-center w-full">
            <Progress value={battery} className="h-4 w-full" />
            <div className="mt-4 text-2xl font-bold">{battery}%</div>
            <div className="text-xs text-gray-500 mt-1">
              {battery > 80 ? "Excellent" : battery > 40 ? "Good" : "Low"}
            </div>
          </div>
        </SensorCard>

        <SensorCard title="Motor Temperature">
          <div className="flex flex-col items-center">
            <div className="w-full h-6 bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500 rounded-md relative">
              <div 
                className="absolute top-0 bottom-0 w-1 bg-black transform -translate-x-1/2" 
                style={{ left: `${(temperature - 30) / 50 * 100}%` }}
              ></div>
            </div>
            <div className="mt-4 text-2xl font-bold">{temperature}°C</div>
            <div className="text-xs text-gray-500 mt-1">
              {temperature < 50 ? "Normal" : temperature < 80 ? "High" : "Critical"}
            </div>
          </div>
        </SensorCard>

        <SensorCard title="Other Sensors">
          <div className="w-full">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full py-2 px-3 bg-gray-100 rounded-md text-center hover:bg-gray-200 transition-colors"
            >
              {isExpanded ? "Hide Details" : "Show Details"}
            </button>
            
            {isExpanded && (
              <div className="mt-3 space-y-2 animate-fade-in">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Pressure:</span>
                  <span>2.5 bar</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Humidity:</span>
                  <span>45%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Oil Level:</span>
                  <span>Good</span>
                </div>
              </div>
            )}
          </div>
        </SensorCard>
      </div>
    </PageLayout>
  );
};

const SensorCard = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-lg shadow-elevation p-4">
      <h3 className="text-base font-semibold mb-4 text-center">{title}</h3>
      {children}
    </div>
  );
};

const SpeedGauge = ({ speed }: { speed: number }) => {
  const maxSpeed = 60; // Maximum speed in the gauge
  const percentage = (speed / maxSpeed) * 100;

  return (
    <div className="relative w-24 h-24">
      {/* Background circle */}
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#eaeaea"
          strokeWidth="10"
          strokeDasharray={`${Math.PI * 90 * 0.75} ${Math.PI * 90 * 0.25}`}
          strokeDashoffset={Math.PI * 90 * 0.125}
          transform="rotate(-225 50 50)"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#1a73e8"
          strokeWidth="10"
          strokeDasharray={`${(percentage / 100) * Math.PI * 90 * 0.75} ${Math.PI * 90}`}
          strokeDashoffset={Math.PI * 90 * 0.125}
          transform="rotate(-225 50 50)"
          strokeLinecap="round"
          className="transition-all duration-700 ease-in-out"
        />
      </svg>
      
      {/* Needle */}
      <div 
        className="absolute w-1 h-16 bg-red-500 left-1/2 top-1/2 -translate-x-1/2 origin-bottom transform transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-50%) rotate(${-225 + (percentage / 100) * 270}deg)` }}
      ></div>
      
      {/* Center circle */}
      <div className="absolute w-4 h-4 bg-gray-800 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default SensorsPage;
