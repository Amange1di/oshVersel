import "./projectPage.scss"
import { ProjectBanner, MainProjects , AmericanCorner} from '../../widgets'

export const ProjectPage = () => {
  return (
    <div className='container'>
      <ProjectBanner />
      <MainProjects />
      <AmericanCorner />
    </div>
  )
}
