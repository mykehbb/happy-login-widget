import { X } from "lucide-react";
import { useState } from "react";

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md relative">
        {/* Close Button */}
        <a href="#" className="absolute left-0 top-0 p-2">
          <X className="w-6 h-6 text-black" />
        </a>
        
        {/* Form Content */}
        <div className="mt-12 space-y-8">
          <h1 className="text-2xl font-normal text-center mb-12">
            Log In Via Mobile Number
          </h1>

          {/* Country/Region Selector */}
          <div className="space-y-2">
            <label className="block text-lg font-normal text-gray-900">
              Country/Region
            </label>
            <div className="flex items-center border-b border-gray-300 pb-2">
              <span className="text-gray-600">United States (+1)</span>
            </div>
          </div>

          {/* Phone Input */}
          <div className="space-y-2">
            <label className="block text-lg font-normal text-gray-900">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-green-500 text-gray-600 placeholder-gray-400"
            />
          </div>

          {/* Other Login Options */}
          <button className="text-blue-600 hover:text-blue-700 font-normal">
            Other Login Options
          </button>

          {/* Verification Notice */}
          <p className="text-gray-400 text-sm mt-auto">
            The above mobile number is used only for login verification.
          </p>

          {/* Continue Button */}
          <button className="w-full bg-[#00D65B] text-white rounded-full py-4 text-lg hover:bg-[#00C054] transition-colors">
            Accept and Continue
          </button>

          {/* Bottom Links */}
          <div className="flex justify-between text-blue-600 pt-4">
            <a href="#" className="hover:text-blue-700">Unable to Log In?</a>
            <a href="#" className="hover:text-blue-700">More Options</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
