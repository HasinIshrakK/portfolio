import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  return (<div className="bg-indigo-950 h-screen">
    <section className="p-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold">{project.name}</h2>
      <p className="mt-2">{project.description}</p>

      <h4 className="mt-4 font-bold">Tech Stack</h4>
      <ul>{project.tech.map(t => <li key={t}>{t}</li>)}</ul>

      <p className="mt-4"><b>Challenges:</b> {project.challenges}</p>
      <p><b>Future Plans:</b> {project.future}</p>

      <a href={project.live} className="text-blue-600 block mt-2">Live Project</a>
      <a href={project.github} className="text-blue-600">GitHub Repo</a>
    </section>
  </div>
  );
}
