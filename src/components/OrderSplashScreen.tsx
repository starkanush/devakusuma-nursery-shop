
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Loader2, MessageCircle, CheckCircle, ShoppingBag, Sparkles } from "lucide-react";

interface OrderSplashScreenProps {
  isVisible: boolean;
  onComplete: () => void;
}

const OrderSplashScreen = ({ isVisible, onComplete }: OrderSplashScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

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
        if (newProgress >= 75 && currentStep === 2) {
          setCurrentStep(3);
          setShowConfetti(true);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          // Automatically call onComplete after a short delay when progress reaches 100%
          setTimeout(onComplete, 1500);
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
      setShowConfetti(false);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      {/* Confetti effect */}
      {showConfetti && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            >
              <div 
                className="h-3 w-3 rotate-45 opacity-70"
                style={{
                  backgroundColor: [
                    '#10B981', // green-500
                    '#34D399', // green-400
                    '#6EE7B7', // green-300
                    '#A7F3D0', // green-200
                    '#ECFDF5', // green-50
                  ][Math.floor(Math.random() * 5)],
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            </div>
          ))}
        </div>
      )}
      
      <Card className="w-full max-w-md mx-4 animate-in fade-in zoom-in duration-500 shadow-xl border-green-100">
        <CardContent className="p-8 text-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-green-50 rounded-full opacity-50" />
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-green-50 rounded-full opacity-50" />
          
          <div className="relative">
            <div className="mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner transform transition-all duration-500 hover:scale-110">
                {currentStep === 3 ? (
                  <ShoppingBag className="h-12 w-12 text-green-600 animate-bounce" />
                ) : (
                  <Leaf className="h-12 w-12 text-green-600 animate-pulse" />
                )}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                {currentStep === 3 ? (
                  <>
                    Order Ready! <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
                  </>
                ) : (
                  "Processing Your Order"
                )}
              </h2>
              <p className="text-gray-600">
                {currentStep === 3 ? 
                  "Your order details are ready to send via WhatsApp" : 
                  "Your order will be processed through WhatsApp"}
              </p>
            </div>

            <div className="space-y-4">
              {/* Progress Bar */}
              <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden shadow-inner">
                <div 
                  className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full transition-all duration-300 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div 
                      className="h-full w-20 bg-white/30 skew-x-30 animate-shimmer"
                      style={{ animationDuration: '2s' }}
                    />
                  </div>
                </div>
              </div>

              {/* Steps tracker */}
              <div className="flex justify-between px-2 mb-2">
                {steps.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${index <= currentStep ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}
                  >
                    {index < currentStep ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : index === currentStep ? (
                      steps[currentStep].icon
                    ) : (
                      <span className="text-xs font-medium">{index + 1}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Current Step */}
              <div className="flex items-center justify-center gap-3 py-4 bg-green-50 rounded-lg border border-green-100 shadow-sm">
                {steps[currentStep].icon}
                <span className="text-lg font-medium text-gray-700">
                  {steps[currentStep].text}
                </span>
              </div>

              {/* Progress Percentage */}
              <div className="text-sm font-medium text-gray-500 flex justify-between items-center">
                <span>{Math.round(progress)}% Complete</span>
                {currentStep === 3 && (
                  <span className="text-green-600 font-medium animate-pulse">
                    Opening WhatsApp...
                  </span>
                )}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="mt-6 flex justify-center space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                  style={{ 
                    animationDelay: `${i * 0.2}s`,
                    opacity: 1 - (i * 0.15)
                  }}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderSplashScreen;
