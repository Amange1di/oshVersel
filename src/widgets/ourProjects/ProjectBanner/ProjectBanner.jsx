import img from '../../../shared/image/banner2.png'
import img3 from '../../../shared/image/Banner.png'
import "./projectbanner.scss"

export const ProjectBanner = () => {
  return (
    <section className='projectBanner'>
        <h1>Наши проекты: читаем, учимся, развиваемся</h1>
        <img className='projectbanner_img1' src={img} alt="Project" />

        <div className="rotating-wrapper">
          <svg id="rotatingText" viewBox="0 0 200 200" >
            <defs>
              <path id="circle" d="M 100, 100 m -70, 0 a 70,70 0 1,0 140,0 a 70,70 0 1,0 -140,0"></path>
            </defs>
            <text>
              <textPath className="text" href="#circle" startOffset="0%">
                 •  Our project • Our project • Our project 
              </textPath>
            </text>
          </svg>
        </div>
        <h3>Библиотека имени Токтогула Сатылганова </h3>

        <img className='projectbanner_img2' src={img3} alt="Project" />
      
    </section>
  )
}
