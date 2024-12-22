import { Button } from "@/components/ui/button";
import { BookOpen, Code, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const userTypes = [
  {
    title: "Developers",
    description: "Build impactful DPGs with AI-powered tools and blockchain integration.",
    icon: Code,
    action: "Start Building",
  },
  {
    title: "Organizations",
    description: "Deploy and customize DPGs to address global challenges.",
    icon: Building2,
    action: "Partner With Us",
  },
  {
    title: "Learn More",
    description: "Explore our comprehensive documentation and resources.",
    icon: BookOpen,
    action: "View Docs",
  },
];

export const GetStarted = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">💡 What Will You Build Today?</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
          Start your journey now and transform your ideas into sustainable Digital Public Goods.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((type) => (
            <div
              key={type.title}
              className="p-6 rounded-lg border border-slate-200 hover:border-indigo-500 transition-colors"
            >
              <type.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-slate-600 mb-6">{type.description}</p>
              <Button asChild variant="outline">
                <Link to="/dashboard" className="group">
                  {type.action}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};