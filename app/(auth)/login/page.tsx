'use client';

import { Button } from "@/components/button";
import Card from "@/components/card";
import QuoteBanner from "@/components/farm_quote";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { ArrowLeft, Lock, Mail, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "@/actions/AuthService";


export default function Login(){

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
    
      await login(formData);
      // If login is successful, redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred while logging in');
    }
  };
  
     return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-emerald-50 to-teal-50 flex relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-[#1F8A34]/10 to-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 relative z-10">
        <div className="w-full max-w-md">
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-6 text-neutral-600 hover:text-neutral-900 hover:bg-white/50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-8 animate-fade-in">
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
                Welcome back
              </Card.CardTitle>
              <Card.CardDescription className="text-neutral-600">
                Sign in to access your farm dashboard
              </Card.CardDescription>
            </Card.CardHeader>
            <Card.CardContent>
              <form onSubmit={handleSubmit} className="space-y-5 mt-4">
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

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-neutral-600 cursor-pointer hover:text-neutral-900">
                    <input type="checkbox" className="rounded border-neutral-300 text-[#1F8A34] focus:ring-[#1F8A34]" />
                    Remember me
                  </label>
                  <a href="#" className="text-[#1F8A34] font-medium hover:text-emerald-700 hover:underline transition-colors">
                    Forgot password?
                  </a>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-linear-to-r from-[#1F8A34] to-emerald-600 hover:from-[#1a7029] hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/30 rounded-xl py-6 text-lg font-medium transition-all duration-300 hover:scale-[1.02]"
                >
                  Sign In
                </Button>
              </form>

              <div className="mt-8 text-center text-sm">
                <span className="text-neutral-600">
                  Don&apos;t have an account?{' '}
                </span>
                <Link
                  href="/register"
                  className="text-[#1F8A34] font-bold hover:text-emerald-700 hover:underline transition-colors"
                >
                  Sign up
                </Link>
              </div>
            </Card.CardContent>
          </Card.Card>
        </div>
      </div>

    </div>
  );
}