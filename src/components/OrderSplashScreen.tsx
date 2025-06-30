
import { useEffect, useState } from "react";
import { Loader2, CheckCircle, MessageCircle, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface OrderSplashScreenProps {
  isVisible: boolean;
  onComplete: () => void;
}

const OrderSplashScreen = ({ isVisible, onComplete }: OrderSplashScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { text: "Processing your order...", icon: <Loader2 className="h-6 w-6 animate-spin" /> },
    { text: "Verifying plant availability...", icon: <Leaf className="h-6 w-6 animate-pulse" /> },
    { text: "Preparing WhatsApp message...", icon: <MessageCircle className="h-6 w-6 animate-bounce" /> },
    { text: "Order ready to send!", icon: <CheckCircle className="h-6 w-6 text-green-500" /> }
  ];

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2;
        
        // Update current step based on progress
        if (newProgress >= 25 && currentStep === 0) setCurrentStep(1);
        if (newProgress >= 50 && currentStep === 1) setCurrentStep(2);
        if (newProgress >= 75 && currentStep === 2) setCurrentStep(3);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isVisible, currentStep, onComplete]);

  useEffect(() => {
    if (isVisible) {
      setProgress(0);
      setCurrentStep(0);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <Card className="w-full max-w-md mx-4 animate-scale-in">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Leaf className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Processing Your Order
            </h2>
            <p className="text-gray-600">
              Your order will be processed through WhatsApp
            </p>
          </div>

          <div className="space-y-4">
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Current Step */}
            <div className="flex items-center justify-center gap-3 py-4">
              {steps[currentStep].icon}
              <span className="text-lg font-medium text-gray-700">
                {steps[currentStep].text}
              </span>
            </div>

            {/* Progress Percentage */}
            <div className="text-sm text-gray-500">
              {Math.round(progress)}% Complete
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-6 flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderSplashScreen;
