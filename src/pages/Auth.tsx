import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Mail, Lock, User, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoginSuccessSplash from "@/components/LoginSuccessSplash";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessSplash, setShowSuccessSplash] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/cart");
      }
    };
    checkUser();
  }, [navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Successfully signed in!");
      setShowSuccessSplash(true);
    }
    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          first_name: firstName,
          last_name: lastName,
        }
      }
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Check your email for the confirmation link!");
    }
    setLoading(false);
  };

  const handleSplashComplete = () => {
    setShowSuccessSplash(false);
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Navigation />
      
      <LoginSuccessSplash 
        isVisible={showSuccessSplash} 
        onComplete={handleSplashComplete} 
      />
      
      <div className="flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Devakusuma</h1>
            <p className="text-gray-600">Your premium plant destination</p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-center text-2xl font-bold text-gray-900">
                Get Started
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="signin" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="signin" className="text-sm font-medium">
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger value="signup" className="text-sm font-medium">
                    Sign Up
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="signin">
                  <form onSubmit={handleSignIn} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="signin-email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="signin-email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 py-3 border-gray-300 focus:border-green-500 focus:ring-green-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="signin-password" className="text-sm font-medium text-gray-700">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="signin-password"
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 py-3 border-gray-300 focus:border-green-500 focus:ring-green-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {loading ? "Signing In..." : "Sign In"}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup">
                  <form onSubmit={handleSignUp} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                          First Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="first-name"
                            type="text"
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="pl-10 py-3 border-gray-300 focus:border-green-500 focus:ring-green-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                          Last Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="last-name"
                            type="text"
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="pl-10 py-3 border-gray-300 focus:border-green-500 focus:ring-green-500"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 py-3 border-gray-300 focus:border-green-500 focus:ring-green-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="text-sm font-medium text-gray-700">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="signup-password"
                          type="password"
                          placeholder="Create a password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 py-3 border-gray-300 focus:border-green-500 focus:ring-green-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {loading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              By signing up, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Auth;
