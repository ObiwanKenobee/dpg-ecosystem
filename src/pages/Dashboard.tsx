import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, Users, ArrowUpRight, Boxes, ChartBar, Globe, Award, HandshakeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const stats = [
    {
      title: "Available Funding",
      value: "$100,000",
      icon: BadgeDollarSign,
      change: "12 new grants",
      description: "in matching opportunities"
    },
    {
      title: "Active Projects",
      value: "24",
      icon: Boxes,
      change: "+3 this month",
      description: "across 8 categories"
    },
    {
      title: "Global Collaborators",
      value: "156",
      icon: Users,
      change: "+12 new",
      description: "from 23 countries"
    },
  ];

  const fundingOpportunities = [
    {
      title: "Innovation Grant",
      amount: "$50,000",
      deadline: "30 days left",
      match: "98% match",
      category: "Sustainable Tech"
    },
    {
      title: "Impact Fund",
      amount: "$75,000",
      deadline: "45 days left",
      match: "85% match",
      category: "Education"
    },
    {
      title: "Community Grant",
      amount: "$25,000",
      deadline: "15 days left",
      match: "92% match",
      category: "Healthcare"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Smart Funding Gateway</h1>
          <p className="text-muted-foreground">Transform your vision with AI-matched funding opportunities</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          Apply for Funding
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-sm">
                <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-500">{stat.change}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">AI-Matched Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {fundingOpportunities.map((opportunity) => (
                <div key={opportunity.title} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="space-y-1">
                    <p className="font-medium">{opportunity.title}</p>
                    <p className="text-sm text-muted-foreground">{opportunity.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{opportunity.amount}</p>
                    <p className="text-sm text-green-500">{opportunity.match}</p>
                    <p className="text-xs text-muted-foreground">{opportunity.deadline}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                <Award className="h-6 w-6" />
                <span>Browse Grants</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                <HandshakeIcon className="h-6 w-6" />
                <span>Find Partners</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                <ChartBar className="h-6 w-6" />
                <span>Analytics</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                <Globe className="h-6 w-6" />
                <span>Marketplace</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;