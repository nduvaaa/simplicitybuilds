
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Globe } from "lucide-react";

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  technologies: string[];
}

const ProjectCard = ({ title, description, image, demoUrl, technologies }: ProjectProps) => {
  return (
    <Card className="overflow-hidden group transition-all hover:shadow-lg border-0">
      <div className="overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="pt-6 bg-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-white">
        <Button className="w-full bg-blue-500 hover:bg-blue-600">
          <a 
            href={demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full"
          >
            <Globe className="h-4 w-4" />
            <span>View Project</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
