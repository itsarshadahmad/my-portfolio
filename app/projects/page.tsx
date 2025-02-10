import Card from "app/components/card";
import { projects } from "data/projects";

const Projects = () => {
    return (
        <div>
            <h1 className="text-4xl mb-5">My Projects</h1>
            <div className="flex flex-col w-full">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        description={project.description}
                        stacks={project.stacks}
                        imageUrl={project.imageUrl}
                        github={project.github}
                        demo={project.demo}
                        isImgPortrait={project.isImgPortrait}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
