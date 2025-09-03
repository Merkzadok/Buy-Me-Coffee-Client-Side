import { CircleCheck } from "lucide-react";

export function DonationComplatePage() {
  return (
    <div className="flex flex-col gap-6 items-center w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* ✅ Icon & Title */}
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="w-20 h-20 bg-green-500 flex justify-center items-center rounded-full shadow-md">
          <CircleCheck className="text-white w-10 h-10" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Donation Complete!</h1>
        <p className="text-gray-600 text-center">
          Thank you for supporting me! Your contribution helps me continue my
          work and build a stronger creative community.
        </p>
      </div>

      {/* ✅ Donor Info / Message Box */}
      <div className="p-4 border rounded-lg w-full bg-gray-50 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <img
            src="https://i.pinimg.com/736x/8e/45/77/8e4577d002725d24c78f1449748e5d12.jpg"
            alt="Donor"
            className="w-10 h-10 rounded-full object-cover border-2 border-green-500"
          />
          <span className="font-medium text-gray-700">You</span>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          Your support means a lot! Every donation is a step toward creating a
          more inclusive and accepting community of artists.
        </p>
      </div>

      {/* ✅ Optional CTA button */}
      <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200">
        Back to Home
      </button>
    </div>
  );
}
