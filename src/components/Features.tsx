import { GradientCard } from "./ui/GradientCard";
import { BadgeDollarSign, Database, PackageOpen, BookOpen, Handshake, ChartBar, Computer } from "lucide-react";

const features = [
  {
    title: "Smart Funding Gateway",
    description: "AI-matched funding opportunities with up to $100K in grants and intuitive reporting tools.",
    icon: BadgeDollarSign,
  },
  {
    title: "Blockchain Transparency",
    description: "Track contributions, royalties, and governance decisions securely on the blockchain.",
    icon: Database,
  },
  {
    title: "DPG Marketplace",
    description: "Discover and showcase impactful Digital Public Good solutions with easy deployment tools.",
    icon: PackageOpen,
  },
  {
    title: "Collaboration Hub",
    description: "Connect with AI-suggested collaborators and track progress in real-time.",
    icon: Handshake,
  },
  {
    title: "Analytics Dashboard",
    description: "Monitor user engagement, track revenue, and measure your impact with built-in analytics.",
    icon: ChartBar,
  },
  {
    title: "AI-Powered Tools",
    description: "Leverage AI for project matching, resource allocation, and development assistance.",
    icon: Computer,
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
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