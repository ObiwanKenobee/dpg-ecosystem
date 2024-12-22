import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-slate-900 px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 to-purple-900 opacity-90" />
      <div className="relative mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Innovate, Collaborate, Monetize 🚀
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Join the revolution in Digital Public Goods development with DPG Hub, the ultimate AI-powered, 
          blockchain-backed platform empowering innovators to create sustainable, impactful solutions.
        </p>
        <div className="mt-10 flex items-center justify-center gap-6">
          <Button asChild size="lg" className="group">
            <Link to="/dashboard">
              Get Started for Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="text-white hover:text-white">
            Learn More
          </Button>
        </div>
        <p className="mt-8 text-sm text-gray-400">
          Your innovation. Our platform. Unlimited impact.
        </p>
      </div>
    </div>
  );
};