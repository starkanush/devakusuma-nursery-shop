
import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface LoginSuccessSplashProps {
  isVisible: boolean;
  onComplete: () => void;
}

const LoginSuccessSplash = ({ isVisible, onComplete }: LoginSuccessSplashProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center transform animate-pulse">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Successfully Logged In!</h2>
        <p className="text-gray-600">Redirecting to your cart...</p>
      </div>
    </div>
  );
};

export default LoginSuccessSplash;
