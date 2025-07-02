import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { User, Package, ShoppingBag, Truck, Edit, Save } from "lucide-react";

interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  phone: string | null;
}

interface OrderHistory {
  id: string;
  created_at: string;
  status: string;
  total: number;
  items: number;
}

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [orderHistory, setOrderHistory] = useState<OrderHistory[]>([]);

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();
          
        if (error) throw error;
        
        setProfile(data);
        setFullName(data.full_name || "");
        setPhone(data.phone || "");
        
        // Mock order history data (replace with actual data when available)
        setOrderHistory([
          {
            id: "ORD-1234",
            created_at: "2023-10-15",
            status: "Delivered",
            total: 450,
            items: 3
          },
          {
            id: "ORD-5678",
            created_at: "2023-09-28",
            status: "Processing",
            total: 275,
            items: 2
          }
        ]);
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };
    
    fetchProfile();
  }, [user]);

  const handleUpdateProfile = async () => {
    if (!user) return;
    
    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: fullName,
          phone: phone
        })
        .eq("id", user.id);
        
      if (error) throw error;
      
      setProfile(prev => prev ? {...prev, full_name: fullName, phone: phone} : null);
      setEditing(false);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    }
  };

  if (!user) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center animate-in fade-in slide-in-from-left duration-700">
          <User className="mr-3 h-8 w-8 text-green-600" />
          My Account
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="md:col-span-1 animate-in fade-in slide-in-from-left duration-700 delay-200">
            <Card className="shadow-md transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Profile Information</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{profile?.email}</p>
                      </div>
                    </div>
                    
                    {editing ? (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input 
                            id="fullName" 
                            value={fullName} 
                            onChange={(e) => setFullName(e.target.value)} 
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            className="mt-1"
                          />
                        </div>
                        <div className="flex gap-2">
                          <Button onClick={handleUpdateProfile} className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-300">
                            <Save className="h-4 w-4 mr-2" />
                            Save Changes
                          </Button>
                          <Button variant="outline" onClick={() => setEditing(false)}>
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">Full Name</p>
                          <p className="font-medium">{profile?.full_name || "Not provided"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone Number</p>
                          <p className="font-medium">{profile?.phone || "Not provided"}</p>
                        </div>
                        <Button 
                          onClick={() => setEditing(true)} 
                          variant="outline" 
                          className="w-full mt-2 transform hover:scale-105 transition-all duration-300"
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Profile
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-2 animate-in fade-in slide-in-from-right duration-700 delay-300">
            <Tabs defaultValue="orders" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="orders" className="text-base">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Order History
                </TabsTrigger>
                <TabsTrigger value="wishlist" className="text-base">
                  <Package className="h-4 w-4 mr-2" />
                  Saved Plants
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="orders" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {orderHistory.length === 0 ? (
                      <div className="text-center py-8">
                        <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
                        <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
                        <Button onClick={() => navigate("/products")} className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-300 animate-in fade-in duration-700">
                          Browse Plants
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {orderHistory.map((order, index) => (
                          <div key={order.id} className="border rounded-lg p-4 transition-all hover:shadow-md transform hover:-translate-y-1 animate-in fade-in slide-in-from-bottom duration-500" style={{ animationDelay: `${index * 150}ms` }}>
                            <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                              <div>
                                <h3 className="font-medium text-gray-900">{order.id}</h3>
                                <p className="text-sm text-gray-500">Placed on {order.created_at}</p>
                              </div>
                              <div>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                                  {order.status === 'Delivered' ? (
                                    <>
                                      <Truck className="h-3 w-3 mr-1" />
                                      {order.status}
                                    </>
                                  ) : (
                                    <>
                                      <Package className="h-3 w-3 mr-1" />
                                      {order.status}
                                    </>
                                  )}
                                </span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <p className="text-sm">{order.items} {order.items === 1 ? 'item' : 'items'}</p>
                              <p className="font-medium text-green-600">₹{order.total}</p>
                            </div>
                            <Button variant="link" className="text-green-600 p-0 h-auto mt-2">
                              View Order Details
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="wishlist">
                <Card>
                  <CardHeader>
                    <CardTitle>Saved Plants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Package className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No saved plants</h3>
                      <p className="text-gray-500 mb-4">You haven't saved any plants to your wishlist yet.</p>
                      <Button onClick={() => navigate("/products")} className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-300 animate-in fade-in duration-700">
                        Browse Plants
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;
