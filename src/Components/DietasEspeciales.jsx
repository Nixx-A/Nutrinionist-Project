/* eslint-disable react/prop-types */
import './DietasEspeciales.css'
export function DietasEspeciales() {
  return (
    <section className='bg-[#67a299] pt-8'>
      <div className='inline-flex justify-center w-full'>
        <img className='w-12' src='/health.png' />
        <p className='ml-12 text-2xl'>Dietas Especiales</p>
      </div>
      <div className='images-grid'>
        <ImgCreator
          url={
            'https://sarajimenezh.com/wp-content/uploads/2017/08/shutterstock_524040574-400x400.jpg.webp'
          }
          description={'Dietas para problemas cardiovasculares'}
        />
        <ImgCreator
          url={
            'https://sarajimenezh.com/wp-content/uploads/2017/09/Hipertension-400x400.jpg.webp'
          }
          description={'Dietas para problemas de hipertensión'}
        />
        <ImgCreator
          url={
            'https://sarajimenezh.com/wp-content/uploads/2017/09/Colesterol-400x400.jpg.webp'
          }
          description={'Dietas para problemas de colesterol elevado'}
        />
        <ImgCreator
          url={
            'https://sarajimenezh.com/wp-content/uploads/2017/08/shutterstock_460202872-400x400.jpg.webp'
          }
          description={'Dietas para problemas de diabetes'}
        />
        <ImgCreator
          url={
            'https://sarajimenezh.com/wp-content/uploads/2017/09/Estrenimiento-400x400.jpg.webp'
          }
          description={'Dietas para combatir el estreñimiento'}
        />
        <ImgCreator
          url={
            'https://sarajimenezh.com/wp-content/uploads/2017/09/Dietas-para-alergias-400x400.jpg.webp'
          }
          description={'Dietas para alergias e intolerancias'}
        />
        <ImgCreator
          url={
            'https://sarajimenezh.com/wp-content/uploads/2017/09/Celiaquia-400x400.jpg.webp'
          }
          description={'Dietas para problemas de celiaquía'}
        />
        <ImgCreator
          url={
            'https://sarajimenezh.com/wp-content/uploads/2017/09/Obesidad-y-sobrepeso-400x400.jpg.webp'
          }
          description={'Dietas para sobrepeso y obesidad'}
        />
      </div>
    </section>
  )
}

function ImgCreator({ url, description }) {
  return (
    <div className='p-1 w-5/6 bg-white'>
      <img src={url} alt={description} />
      <p className='text-center pb-4'>{description}</p>
    </div>
  )
}
