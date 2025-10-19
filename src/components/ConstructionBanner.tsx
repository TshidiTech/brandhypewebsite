import { Phone } from "lucide-react";

const ConstructionBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-accent text-accent-foreground">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-[scroll_20s_linear_infinite]">
          <span className="inline-flex items-center px-4 py-2 text-sm font-medium">
            🚧 Website Under Construction - Please WhatsApp us on 081 661 7013 for inquiries
          </span>
          <span className="inline-flex items-center px-4 py-2 text-sm font-medium">
            🚧 Website Under Construction - Please WhatsApp us on 081 661 7013 for inquiries
          </span>
          <span className="inline-flex items-center px-4 py-2 text-sm font-medium">
            🚧 Website Under Construction - Please WhatsApp us on 081 661 7013 for inquiries
          </span>
          <span className="inline-flex items-center px-4 py-2 text-sm font-medium">
            🚧 Website Under Construction - Please WhatsApp us on 081 661 7013 for inquiries
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConstructionBanner;
