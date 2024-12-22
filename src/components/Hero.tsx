import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, DollarSign } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-slate-900 px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 to-purple-900 opacity-90" />
      <div className="relative mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Empowering Digital Public Goods
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          An AI-powered, blockchain-backed ecosystem designed to revolutionize the development,
          deployment, and monetization of Digital Public Goods.
        </p>
        <div className="mt-10 flex items-center justify-center gap-6">
          <Button size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { icon: Globe, label: "Global Impact", value: "100+" },
            { icon: Users, label: "Active Projects", value: "500+" },
            { icon: DollarSign, label: "Funds Distributed", value: "$1M+" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <stat.icon className="h-8 w-8 text-indigo-400" />
              <div className="mt-2 text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};