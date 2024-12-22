import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Globe, Database, Cloud, Lock, Plus } from "lucide-react";

const Integrations = () => {
  const integrations = [
    {
      title: "GitHub",
      description: "Connect your repositories and manage code contributions",
      icon: Github,
      status: "Connected",
      type: "Development"
    },
    {
      title: "Cloud Storage",
      description: "Secure file storage and sharing capabilities",
      icon: Cloud,
      status: "Available",
      type: "Storage"
    },
    {
      title: "Database",
      description: "Managed database solutions for your DPG",
      icon: Database,
      status: "Available",
      type: "Infrastructure"
    },
    {
      title: "Authentication",
      description: "Secure user authentication and authorization",
      icon: Lock,
      status: "Connected",
      type: "Security"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Integrations</h1>
          <p className="text-muted-foreground">Manage your project integrations and connections</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Integration
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {integrations.map((integration) => (
          <Card key={integration.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="p-2 bg-secondary rounded-lg">
                <integration.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{integration.title}</CardTitle>
                  <Badge variant={integration.status === "Connected" ? "default" : "secondary"}>
                    {integration.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{integration.description}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <Badge variant="outline">{integration.type}</Badge>
                <Button variant="outline" size="sm">
                  {integration.status === "Connected" ? "Manage" : "Connect"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Integrations;