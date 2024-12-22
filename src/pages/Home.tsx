import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Users, Globe, Boxes } from "lucide-react";

const Home = () => {
  const highlights = [
    {
      title: "Active Projects",
      value: "156",
      icon: Boxes,
      description: "Across 23 countries"
    },
    {
      title: "Global Community",
      value: "10K+",
      icon: Globe,
      description: "Active developers"
    },
    {
      title: "Collaborations",
      value: "450+",
      icon: Users,
      description: "Ongoing partnerships"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome to DPG Hub</h1>
          <p className="text-muted-foreground">Transform your vision with AI-matched opportunities</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Rocket className="mr-2 h-4 w-4" />
          Launch Project
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <item.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Activity items would go here */}
              <p className="text-sm text-muted-foreground">No recent activity to display</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                <Boxes className="h-6 w-6" />
                <span>My Projects</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                <Users className="h-6 w-6" />
                <span>Team</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;