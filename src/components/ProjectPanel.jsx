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

      <div className="mt-4 grid grid-cols-1 gap-2 sm:mt-5 sm:gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`relative overflow-hidden rounded-xl border border-ice/[0.07] bg-carbon ${
              projects.length === 1 ? 'sm:col-span-2' : ''
            }`}
          >
            {project.image && (
              <img
                src={project.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            {/* Degradado de arriba hacia abajo — la foto de fondo se funde en el texto */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: project.image
                  ? 'linear-gradient(to bottom, rgba(15,32,53,0.15) 0%, rgba(15,32,53,0.75) 55%, rgba(15,32,53,0.97) 100%)'
                  : 'none',
              }}
            />
            <div
              className={`relative p-2 sm:p-3 ${
                projects.length === 1 ? 'pt-6 sm:pt-14' : 'pt-5 sm:pt-8'
              }`}
            >
              <span
                className={`inline-block rounded border px-1.5 py-0.5 text-[10px] uppercase tracking-wide sm:px-2 sm:text-[11px] ${
                  VERTICAL_CHIP_CLASS[project.vertical] ?? 'border-steel/30 bg-steel/15 text-steel'
                }`}
              >
                {project.vertical}
              </span>
              <h4 className="mt-0.5 font-display text-[12px] uppercase leading-tight tracking-wide text-ice sm:mt-1.5 sm:text-sm">
                {project.title}
              </h4>
              <p className="mt-0.5 text-[10.5px] leading-snug text-ice/60 sm:mt-1 sm:text-[12px]">
                {project.year} · {project.metrics}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectPanel
