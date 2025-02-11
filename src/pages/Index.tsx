
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const projects = {
  multimedia: [
    {
      title: "Digital Art Gallery",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "Interactive virtual gallery showcasing digital artworks",
      points: ["3D visualization", "WebGL rendering", "Real-time interactions"],
    },
    {
      title: "Music Visualizer",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "Real-time audio visualization platform",
      points: ["Audio analysis", "Dynamic visuals", "Custom algorithms"],
    },
    {
      title: "Motion Graphics",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: "Animated graphics for digital platforms",
      points: ["2D animation", "Visual effects", "Brand storytelling"],
    },
    {
      title: "Interactive Installation",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      description: "Public space digital art installation",
      points: ["Sensor integration", "Responsive design", "Public engagement"],
    },
    {
      title: "Video Production",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Professional video production services",
      points: ["4K filming", "Color grading", "Audio mixing"],
    },
    {
      title: "AR Experience",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "Augmented reality mobile application",
      points: ["3D tracking", "Interactive elements", "Mobile optimization"],
    },
  ],
  elearning: [
    {
      title: "Online Course Platform",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "Comprehensive e-learning management system",
      points: ["Course creation", "Student tracking", "Assessment tools"],
    },
    {
      title: "Interactive Tutorials",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: "Step-by-step interactive learning guides",
      points: ["Progress tracking", "Immediate feedback", "Adaptive learning"],
    },
    {
      title: "Virtual Classroom",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      description: "Real-time virtual learning environment",
      points: ["Live streaming", "Chat integration", "Resource sharing"],
    },
    {
      title: "Mobile Learning App",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Educational mobile application development",
      points: ["Offline access", "Progress sync", "Interactive exercises"],
    },
    {
      title: "Training Simulations",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "Virtual training and simulation programs",
      points: ["Scenario-based", "Performance tracking", "Real-time feedback"],
    },
    {
      title: "Learning Analytics",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "Educational data analysis platform",
      points: ["Performance metrics", "Learning patterns", "Custom reports"],
    },
  ],
  facilitation: [
    {
      title: "Workshop Design",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: "Custom workshop development and planning",
      points: ["Needs assessment", "Content creation", "Activity design"],
    },
    {
      title: "Team Building",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      description: "Corporate team building programs",
      points: ["Group dynamics", "Leadership skills", "Collaboration tools"],
    },
    {
      title: "Strategic Planning",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Facilitated strategic planning sessions",
      points: ["Goal setting", "Action planning", "Progress monitoring"],
    },
    {
      title: "Change Management",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "Organizational change facilitation",
      points: ["Change strategy", "Stakeholder engagement", "Implementation support"],
    },
    {
      title: "Group Coaching",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "Professional group coaching services",
      points: ["Skill development", "Peer learning", "Performance improvement"],
    },
    {
      title: "Process Design",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: "Business process improvement facilitation",
      points: ["Process mapping", "Efficiency analysis", "Implementation planning"],
    },
  ],
};

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".section-heading").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Hero Section */}
      <section className="container mx-auto pt-24 pb-16">
        <h1 className="text-6xl md:text-7xl font-mono font-bold mb-8 animate-fade-up">
          Portfolio
        </h1>
        <nav className="flex gap-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
          <a href="#multimedia" className="nav-link">
            Multimedia Projects
          </a>
          <a href="#elearning" className="nav-link">
            E-Learning
          </a>
          <a href="#facilitation" className="nav-link">
            Facilitation Services
          </a>
        </nav>
      </section>

      {/* Project Sections */}
      <section id="multimedia" className="py-24 bg-white">
        <div className="container mx-auto">
          <h2 className="section-heading">Multimedia Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.multimedia.map((project, index) => (
              <div
                key={project.title}
                className="project-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-mono font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <ul className="space-y-2">
                  {project.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="elearning" className="py-24 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="section-heading">E-Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.elearning.map((project, index) => (
              <div
                key={project.title}
                className="project-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-mono font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <ul className="space-y-2">
                  {project.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="facilitation" className="py-24 bg-white">
        <div className="container mx-auto">
          <h2 className="section-heading">Facilitation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.facilitation.map((project, index) => (
              <div
                key={project.title}
                className="project-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-mono font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <ul className="space-y-2">
                  {project.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
