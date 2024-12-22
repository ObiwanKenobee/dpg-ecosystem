import { Button } from "@/components/ui/button";
import { BookOpen, Code, Building2 } from "lucide-react";

const userTypes = [
  {
    title: "Developers",
    description: "Start building and contributing to Digital Public Goods.",
    icon: Code,
    action: "Start Coding",
  },
  {
    title: "Organizations",
    description: "Deploy and customize DPGs for your needs.",
    icon: Building2,
    action: "Partner With Us",
  },
  {
    title: "Learn More",
    description: "Explore our documentation and resources.",
    icon: BookOpen,
    action: "View Docs",
  },
];

export const GetStarted = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Get Started with DPG Hub</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((type) => (
            <div
              key={type.title}
              className="p-6 rounded-lg border border-slate-200 hover:border-indigo-500 transition-colors"
            >
              <type.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-slate-600 mb-6">{type.description}</p>
              <Button variant="outline">{type.action}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};