'use client';

import { login, register } from "@/actions/AuthService";
import { Button } from "@/components/button";
import Card from "@/components/card";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Select } from "@/components/select";
import { ArrowLeft, Building, Home, Lock, Mail, User, Sparkles, AlertCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Register(){

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [name, setName] = useState('');
    const [farmName, setFarmName] = useState('');
    const [farmType, setFarmType] = useState('');
    const [errors, setErrors] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    formData.append('name', name);
    formData.append('farm_name', farmName);
    formData.append('type', farmType);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', password_confirmation);
    
   const res =  await register(formData);
  if(!res.success){
    setErrors(res.errors ?? ['Something went wrong']);
    setLoading(false);
    return;
  }

    router.push('/setup');
  };

     return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-emerald-50 to-teal-50 flex relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-[#1F8A34]/10 to-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 overflow-y-auto pt-12 md:pt-24 pb-12 relative z-10">
        <div className="w-full max-w-md my-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-6 text-neutral-600 hover:text-neutral-900 hover:bg-white/50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-8">
              <Image
                src="/arms_logo.png"
                alt='Agronomy Record Management System logo'
                width={100}
                height={100}
                className="drop-shadow-md"
                />
          </div>

          <Card.Card className="bg-white/70 backdrop-blur-md border-white/50 shadow-2xl rounded-3xl overflow-hidden animate-slide-in">
            <div className="h-2 bg-linear-to-r from-[#1F8A34] to-emerald-600"></div>
            <Card.CardHeader className="pb-2">
              <Card.CardTitle className="text-2xl font-bold bg-linear-to-r from-neutral-900 via-[#1F8A34] to-emerald-700 bg-clip-text text-transparent">
                Create account
              </Card.CardTitle>
              <Card.CardDescription className="text-neutral-600 text-sm">
                Let's get you set up.
              </Card.CardDescription>
            </Card.CardHeader>
            <Card.CardContent>
              {errors.length > 0 && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm mb-4 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      {errors.length === 1 ? (
                        <p>{errors[0]}</p>
                      ) : (
                        <ul className="list-disc list-inside space-y-1">
                          {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5 mt-4">
                <div className="space-y-2 group">
                  <Label htmlFor="name" className="text-sm font-semibold text-neutral-700">Full Name</Label>
                  <div className="relative transition-all duration-300 focus-within:scale-[1.02]">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-[#1F8A34] transition-colors" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10 border-2 border-neutral-200 focus:border-[#1F8A34] rounded-xl bg-white/50 focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="farmName" className="text-sm font-semibold text-neutral-700">Farm Name</Label>
                  <div className="relative transition-all duration-300 focus-within:scale-[1.02]">
                    <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-[#1F8A34] transition-colors" />
                    <Input
                      id="farmName"
                      type="text"
                      placeholder="Green Valley Farm"
                      value={farmName}
                      onChange={(e) => setFarmName(e.target.value)}
                      className="pl-10 border-2 border-neutral-200 focus:border-[#1F8A34] rounded-xl bg-white/50 focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="farmType" className="text-sm font-semibold text-neutral-700">Farm Type</Label>
                  <div className="relative transition-all duration-300 focus-within:scale-[1.02]">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 z-10 group-focus-within:text-[#1F8A34] transition-colors" />
                    <Select
                      id="farmType"
                      value={farmType}
                      onChange={(e) => setFarmType(e.target.value)}
                      className="pl-10 pr-4 border-2 border-neutral-200 focus:border-[#1F8A34] rounded-xl bg-white/50 focus:bg-white transition-all"
                      required
                    >
                      <option value="">Select farm type</option>
                      <option value="greenhouse">Greenhouse</option>
                      <option value="open-field">Open Field</option>
                      <option value="hydroponics">Hydroponics</option>
                      <option value="aquaponics">Aquaponics</option>
                      <option value="mixed">Mixed Farming</option>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="email" className="text-sm font-semibold text-neutral-700">Email</Label>
                  <div className="relative transition-all duration-300 focus-within:scale-[1.02]">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-[#1F8A34] transition-colors" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@arms.co"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 border-2 border-neutral-200 focus:border-[#1F8A34] rounded-xl bg-white/50 focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="password" className="text-sm font-semibold text-neutral-700">Password</Label>
                  <div className="relative transition-all duration-300 focus-within:scale-[1.02]">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-[#1F8A34] transition-colors" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 border-2 border-neutral-200 focus:border-[#1F8A34] rounded-xl bg-white/50 focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="password_confirmation" className="text-sm font-semibold text-neutral-700">Confirm Password</Label>
                  <div className="relative transition-all duration-300 focus-within:scale-[1.02]">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-[#1F8A34] transition-colors" />
                    <Input
                      id="password_confirmation"
                      type="password"
                      placeholder="••••••••"
                      value={password_confirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                      className="pl-10 border-2 border-neutral-200 focus:border-[#1F8A34] rounded-xl bg-white/50 focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-linear-to-r from-[#1F8A34] to-emerald-600 hover:from-[#1a7029] hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/30 rounded-xl py-6 text-lg font-medium transition-all duration-300 hover:scale-[1.02]"
                >
                  Create Account
                </Button>

                <p className="text-xs text-neutral-500 text-center">
                  By creating an account, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>

              <div className="mt-8 text-center text-sm">
                <span className="text-neutral-600">
                  Already have an account?{' '}
                </span>
                <Link
                  href="/login"
                  className="text-[#1F8A34] font-bold hover:text-emerald-700 hover:underline transition-colors"
                >
                  Sign in
                </Link>
              </div>
            </Card.CardContent>
          </Card.Card>

          <Card.Card className="mt-6 border-[#1F8A34]/30 bg-linear-to-br from-[#1F8A34]/5 to-emerald-500/5 backdrop-blur-sm rounded-2xl">
            <Card.CardContent className="p-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1F8A34]/10 flex items-center justify-center shrink-0">
                  <Building className="w-5 h-5 text-[#1F8A34]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-900 mb-1">New to ARMS?</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    After signup, you&apos;ll go through a quick farm setup wizard to configure your greenhouses and preferences.
                  </p>
                </div>
              </div>
            </Card.CardContent>
          </Card.Card>
        </div>
      </div>
    </div>
  );
}
