import configPromise from '@payload-config'
import { getPayload } from 'payload'
import Image from 'next/image'

const getProjects = async () => {
  const payload = await getPayload({
    config: configPromise,
  })
  const projects = await payload.find({
    collection: 'projects',
    limit: 10,
  })
  return projects
}

const Home = async () => {
  const projects = await getProjects()
  // const project = projects.docs[0]
  return (
    <main className="main-container">
      {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
      {projects.docs.map((project, index) => (
        <div className="project-card" key={index}>
          <h1 className="project-title">{project.title}</h1>
          <Image
            sizes="900px"
            className="project-image"
            src={project.image.url}
            alt={project.image.alt}
            width={project.image.width as number}
            height={project.image.height as number}
          />
        </div>
      ))}
    </main>
  )
}

export default Home
