
import { User } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

const ProfilePage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-lg shadow-elevation p-6 mb-6 w-full text-center">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4 overflow-hidden">
              <User size={40} className="text-gray-400" />
              {/* In a real app, this would be: <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" /> */}
            </div>
            <h2 className="text-xl font-bold mb-1">Ahmed Mohamed</h2>
            
            <div className="mt-4 w-full">
              <div className="flex items-center mb-3 bg-gray-50 p-3 rounded-md">
                <span className="text-gray-500 mr-2">Email:</span>
                <span className="flex-1">ahmed@example.com</span>
                <button className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                    <path d="m15 5 4 4"></path>
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center bg-gray-50 p-3 rounded-md">
                <span className="text-gray-500 mr-2">Phone Number:</span>
                <span className="flex-1">+20 123 456 7890</span>
                <button className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                    <path d="m15 5 4 4"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-elevation p-4 w-full mb-6">
          <h3 className="text-lg font-semibold mb-4">Statistics</h3>
          
          <div className="grid grid-cols-3 gap-4">
            <StatsCard icon="🚲" value="12" label="Number of Trips" />
            <StatsCard icon="⏳" value="24" label="Time (hours)" />
            <StatsCard icon="📍" value="120" label="Distance (km)" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

const StatsCard = ({ icon, value, label }: { icon: string; value: string; label: string }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-3 text-center card-stats">
      <div className="text-2xl mb-1">{icon}</div>
      <div className="text-xl font-bold">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
};

export default ProfilePage;
