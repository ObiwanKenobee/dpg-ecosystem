import { GradientCard } from "./ui/GradientCard";
import { 
  BadgeDollarSign, 
  Database, 
  Users, 
  Globe, 
  BookOpen, 
  Rocket,
  Shield,
  Zap
} from "lucide-react";

const features = [
  {
    title: "AI-Matched Funding",
    description: "Access up to $100K in grants through our smart funding gateway with AI-powered matching.",
    icon: BadgeDollarSign,
  },
  {
    title: "Blockchain Transparency",
    description: "Track contributions, royalties, and governance decisions with confidence on the blockchain.",
    icon: Database,
  },
  {
    title: "Global Collaboration",
    description: "Connect with changemakers worldwide using AI-driven collaboration tools and real-time tracking.",
    icon: Users,
  },
  {
    title: "Inclusive Design",
    description: "Built for everyone with offline accessibility and multilingual support for diverse communities.",
    icon: Globe,
  },
  {
    title: "Skill Development",
    description: "Access comprehensive tutorials and training on DPG frameworks and best practices.",
    icon: BookOpen,
  },
  {
    title: "Easy Monetization",
    description: "Implement subscriptions, freemium models, and donation systems with built-in tools.",
    icon: Zap,
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why DPG Hub?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transform your ideas into scalable, impactful solutions for a better world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <GradientCard key={feature.title} className="flex flex-col items-start">
              <feature.icon className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
};