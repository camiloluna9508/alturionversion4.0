import { VERTICAL_CHIP_CLASS } from '../data/departmentProjects'

/**
 * Panel de proyectos del departamento seleccionado — sección 10.6.
 */
function ProjectPanel({ deptName, projects }) {
  return (
    <div>
      <h3 className="font-display text-2xl uppercase tracking-wide text-ice">{deptName}</h3>
      <p className="mt-1 text-xs uppercase tracking-wide text-steel">
        {projects.length} proyecto{projects.length !== 1 ? 's' : ''} ejecutado
        {projects.length !== 1 ? 's' : ''}
      </p>

      <div className="mt-6 flex flex-col gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-ice/[0.07] bg-carbon p-5"
          >
            <span
              className={`inline-block rounded border px-2 py-0.5 text-[11px] uppercase tracking-wide ${
                VERTICAL_CHIP_CLASS[project.vertical] ?? 'border-steel/30 bg-steel/15 text-steel'
              }`}
            >
              {project.vertical}
            </span>
            <h4 className="mt-2 font-display text-base uppercase tracking-wide text-ice">
              {project.title}
            </h4>
            <p className="mt-1 text-[13px] text-ice/60">
              {project.year} · {project.metrics}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectPanel
