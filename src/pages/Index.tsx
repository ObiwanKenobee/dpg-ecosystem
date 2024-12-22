import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { GetStarted } from "@/components/GetStarted";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <GetStarted />
    </div>
  );
};

export default Index;