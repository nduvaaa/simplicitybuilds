import html from "@/img/html.png" ;
import css from "@/img/css.png" ;
import js from "@/img/javascript.png" ;
import php from "@/img/php.png" ;
import react from "@/img/react.png" ;
import laravel from "@/img/Laravel.png" ;
import wordpress from "@/img/WordPress.png" ;
import shopify from "@/img/shopify.png" ;

import { Award, Code, Globe, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const technologies = [
    { 
      name: "HTML", 
      description: "Semantic markup and structure",
      image: html
    },
    { 
      name: "CSS", 
      description: "Modern styling and animations",
      image: css
    },
    { 
      name: "JavaScript", 
      description: "Interactive web experiences",
      image: js
    },
    { 
      name: "PHP", 
      description: "Server-side development",
      image: php
    },
    { 
      name: "React & Next.js", 
      description: "Modern frontend frameworks",
      image: react
    },
    { 
      name: "Laravel", 
      description: "Robust PHP framework",
      image: laravel
    },
    { 
      name: "WordPress", 
      description: "Content management systems",
      image: wordpress
    },
    { 
      name: "Shopify", 
      description: "E-commerce solutions",
      image: shopify
    }
  ];

  const services = [
    {
      icon: <Globe className="h-12 w-12 text-blue-500" />,
      title: "Website Development",
      description: "Responsive, modern websites designed to showcase your brand and convert visitors into customers."
    },
    {
      icon: <Code className="h-12 w-12 text-blue-500" />,
      title: "Web Applications",
      description: "Custom web applications that solve business problems and streamline your operations."
    },
    {
      icon: <Award className="h-12 w-12 text-blue-500" />,
      title: "E-commerce Solutions",
      description: "Feature-rich online stores that deliver exceptional shopping experiences and drive sales."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-500" />,
      title: "Digital Consulting",
      description: "Expert advice on improving your digital presence and implementing technical solutions."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h2>About Our Company</h2>
          <p>We transform ideas into powerful digital experiences</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="heading-sm mb-4 text-blue-500">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              SimplicityBuilds is a team of passionate web developers and designers dedicated to creating
              exceptional digital experiences for businesses of all sizes.
            </p>
            <p className="text-gray-600 mb-4">
              With over 8 years of combined experience, we've helped hundreds of clients establish
              a strong online presence and achieve their digital transformation goals.
            </p>
            <p className="text-gray-600">
              Our approach combines technical expertise with creative design to deliver websites
              and applications that not only look stunning but also drive real business results.
            </p>
          </div>
          <div>
            <h3 className="heading-sm mb-6 text-blue-500">Technologies We Use</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech) => (
                <Card key={tech.name} className="hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <div className="relative h-24 overflow-hidden">
                    <img 
                      src={tech.image} 
                      alt={`${tech.name} programming`}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-20"></div>
                  </div>
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-blue-600 mb-2">{tech.name}</h4>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="heading-sm mb-10 text-center text-blue-500">Services We Offer</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gradient-company p-6 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-5">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-center">{service.title}</h4>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
