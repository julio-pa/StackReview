import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Plus } from "lucide-react";
import { Technology } from "~/routes/stacks/_index/types";
import { useState } from "react";
import { Badge } from "~/components/ui/badge";

export default function CreateStackModal() {
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);

  const handleTechSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTech = frameworks.find(
      (framework) => framework.name === event.target.value
    );
    if (
      selectedTech &&
      !selectedTechs.some((tech) => tech.name === selectedTech.name)
    ) {
      setSelectedTechs((prev) => [...prev, selectedTech]);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2">
          <Plus className="w-4 h-4" /> Create Stack
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Create New Stack</DialogTitle>
          <DialogDescription>
            Share your favorite technology combinations with the community.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Stack Title</Label>
            <Input id="title" placeholder="e.g. Modern Web Development Stack" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your technology stack and its benefits..."
              rows={5}
              className="resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="categories">Category</Label>
            <select
              id="categories"
              defaultValue=""
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="" disabled selected>
                Select a category
              </option>
              <option value="programming">Programming</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="business">Business</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="techs">Techs</Label>
            <select
              id="techs"
              defaultValue=""
              onChange={handleTechSelection}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="" disabled>
                Select a framework
              </option>
              {frameworks.map((framework) => (
                <option value={framework.name} key={framework.name}>
                  {framework.name}
                </option>
              ))}
            </select>
            <p>Selected Techs:</p>
            <div className="flex flex-wrap gap-2">
              {selectedTechs.map((tech) => (
                <Badge key={tech.name}>{tech.name}</Badge>
              ))}
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full">
              Create Stack
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
const frameworks: Technology[] = [
  {
    name: "React",
    category: "Frontend Framework",
    website: "https://reactjs.org",
  },
  {
    name: "Remix",
    category: "Full-stack Framework",
    website: "https://remix.run",
  },
  {
    name: "Next.js",
    category: "Full-stack Framework",
    website: "https://nextjs.org",
  },
  {
    name: "Angular",
    category: "Frontend Framework",
    website: "https://angular.io",
  },
  {
    name: "Vue.js",
    category: "Frontend Framework",
    website: "https://vuejs.org",
  },
  {
    name: "Django",
    category: "Backend Framework",
    website: "https://www.djangoproject.com",
  },
  {
    name: "Express.js",
    category: "Backend Framework",
    website: "https://expressjs.com",
  },
  {
    name: "Ruby on Rails",
    category: "Full-stack Framework",
    website: "https://rubyonrails.org",
  },
  {
    name: "Laravel",
    category: "Backend Framework",
    website: "https://laravel.com",
  },
  {
    name: "Spring Boot",
    category: "Backend Framework",
    website: "https://spring.io/projects/spring-boot",
  },
  {
    name: "ASP.NET Core",
    category: "Backend Framework",
    website: "https://dotnet.microsoft.com/apps/aspnet",
  },
];
