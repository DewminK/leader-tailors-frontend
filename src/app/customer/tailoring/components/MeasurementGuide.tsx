import Image from "next/image";

// Define the props interface, including a function to close the modal
interface MeasurementGuideProps {
  onClose: () => void;
}

// A simple checkmark icon component
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-white bg-black rounded-full p-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
  </svg>
);

// The MeasurementCard component for individual measurements
const MeasurementCard = ({ title, line1, line2 }: { title: string; line1: string; line2: string }) => (
  // Changed background to pure white for better contrast
  <div className="bg-white border border-gray-200 rounded-lg p-3">
    {/* --- CHANGE: Made title text darker --- */}
    <h4 className="font-bold text-sm mb-2 text-gray-900">{title}</h4>
    <p className="text-xs text-gray-700 border-b border-gray-200 pb-2">{line1}</p>
    <p className="text-xs text-gray-700 pt-2">{line2}</p>
  </div>
);

export default function MeasurementGuide({ onClose }: MeasurementGuideProps) {
  return (
    // Main container with a semi-transparent background and blur
    <div
      className="fixed inset-0 bg-blur bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      {/* Modal content container */}
      <div
        // --- CHANGE: Changed background from bg-gray-50 to bg-white ---
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          {/* --- CHANGE: Made "Measurement Guide" text darker --- */}
          <h2 className="text-xl font-light text-gray-600">Measurement Guide</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
        </div>

        {/* Header Image */}
        <div className="relative h-15 rounded-lg overflow-hidden mb-2 bg-white/70">
          
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h3 className="text-white text-3xl font-serif">How to take Measurements</h3>
          </div>
        </div>
        {/* --- CHANGE: Made subtitle text slightly darker --- */}
        <p className="text-xs text-gray-600 mb-6">Use a soft measuring tape for best results</p>

        {/* Key Measurements */}
        {/* --- CHANGE: Made "Key Measurements" title black for emphasis --- */}
        <h3 className="text-2xl font-serif mb-4 text-black">Key Measurements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Note: The MeasurementCard component is now styled with a white background and darker text */}
            <MeasurementCard title="Chest" line1="Measure around the fullest part of your chest" line2="Keep the tape measure parallel to the ground" />
            <MeasurementCard title="Waist" line1="Measure around your natural waistline" line2="Measure where you naturally bend" />
            <MeasurementCard title="Shoulder Width" line1="Measure from shoulder point to shoulder point" line2="Measure across the back at the widest point" />
            <MeasurementCard title="Full Sleeve" line1="Measure from the tip of your shoulder down to your wrist." line2="Keep your arm slightly bent and relaxed while measuring to ensure comfort and accuracy." />
        </div>

        {/* Pro Tips */}
        {/* --- CHANGE: Changed background to a very light gray for separation --- */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          {/* --- CHANGE: Made "Pro Tips" title black for emphasis --- */}
          <h4 className="font-bold text-lg mb-4 text-black">Pro Tips</h4>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-center gap-3"><CheckIcon /> Wear the type of clothing you'll be wearing with the garment</li>
            <li className="flex items-center gap-3"><CheckIcon /> Use a soft measuring tape, not a ruler</li>
            <li className="flex items-center gap-3"><CheckIcon /> Keep the tape measure snug but not tight</li>
            <li className="flex items-center gap-3"><CheckIcon /> Have someone help you for more accurate measurements</li>
          </ul>
        </div>

        {/* Confirm Button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-black text-white px-8 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}