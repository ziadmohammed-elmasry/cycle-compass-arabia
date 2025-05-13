
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Switch } from "@/components/ui/switch";
import { LogOut } from "lucide-react";

const SettingsPage = () => {
  const [language, setLanguage] = useState<"ar" | "en">("en");
  const [bluetoothEnabled, setBluetoothEnabled] = useState(true);

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  const logout = () => {
    console.log("Logout");
    // Implementation would go here
  };

  return (
    <PageLayout title="Settings">
      <div className="bg-white rounded-lg shadow-elevation">
        <div className="border-b p-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Language:</span>
            <span>{language === "ar" ? "Arabic" : "English"}</span>
          </div>
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-md"
          >
            {language === "ar" ? (
              <span className="text-sm flex items-center">
                <span className="mr-1">🇬🇧</span> English
              </span>
            ) : (
              <span className="text-sm flex items-center">
                <span className="mr-1">🇪🇬</span> Arabic
              </span>
            )}
          </button>
        </div>

        <div className="border-b p-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Bluetooth Connection:</span>
            <span>{bluetoothEnabled ? "Enabled" : "Disabled"}</span>
          </div>
          <Switch
            checked={bluetoothEnabled}
            onCheckedChange={setBluetoothEnabled}
            className={bluetoothEnabled ? "bg-success" : "bg-gray-300"}
          />
        </div>

        <div className="p-4">
          <button
            onClick={logout}
            className="w-full py-3 px-4 rounded-md bg-red-50 text-destructive hover:bg-red-100 transition-colors flex items-center justify-center"
          >
            <LogOut size={18} className="mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default SettingsPage;
