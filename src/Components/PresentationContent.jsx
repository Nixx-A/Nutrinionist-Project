import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export function PresentationContent() {
  return (
    <section className='bg-[#f66] text-center h-96 text-white items-center justify-center py-16 flex flex-col md:flex-row'>
      <div className='hidden lg:flex lg:justify-center lg:flex-col lg:items-center  mr-32'>
        <img
          className='w-36 h-36 rounded-full object-cover '
          src='/flor.jpg'
          alt='flor foto'
        />
        <div className='flex flex-row mt-1'>
          <a href=''>
            <AiFillFacebook className='bg-[#f44] hover:bg-[#f22] duration-300 text-white rounded-full w-8 h-8 p-1.5  mr-3' />
          </a>
          <a
            className=''
            href='https://www.instagram.com/flor_ayan/'
            target='_blank'
            rel='noreferrer'>
            <AiFillInstagram className='bg-[#f44]   hover:bg-[#f22] duration-300 text-white rounded-full w-8 h-8 p-1.5 mr-3' />
          </a>
          <a href=''>
            <BsTwitter className='bg-[#f44]  hover:bg-[#f22] duration-300 text-white rounded-full w-8 h-8 p-1.5' />
          </a>
        </div>
        <Link to={'/sobre-mi'} className='mt-2 underline underline-offset-2'>
          Sobre Mi
        </Link>
      </div>
      <div className='lg:flex lg:flex-col'>
        <div className='flex flex-col '>
          <h1 className='mt-5 text-xl font-semibold'>Florencia Ayan</h1>
          <h2 className='text-xl font-semibold'>Licenciada en Nutricion</h2>
          <p className='mb-2'>Especialista en clinica medica </p>
        </div>

        <div className='flex justify-center flex-col items-center lg:hidden '>
          <img
            className='w-36 h-36 rounded-full object-cover '
            src='/public/flor.jpg'
            alt='flor foto'
          />
          <div className='flex flex-row mt-1'>
            <a href=''>
              <AiFillFacebook className='bg-[#f44] hover:bg-[#f22] duration-300 text-white rounded-full w-8 h-8 p-1.5  mr-3' />
            </a>
            <a
              className=''
              href='https://www.instagram.com/flor_ayan/'
              target='_blank'
              rel='noreferrer'>
              <AiFillInstagram className='bg-[#f44]   hover:bg-[#f22] duration-300 text-white rounded-full w-8 h-8 p-1.5 mr-3' />
            </a>
            <a href=''>
              <BsTwitter className='bg-[#f44]  hover:bg-[#f22] duration-300 text-white rounded-full w-8 h-8 p-1.5' />
            </a>
          </div>
          <Link to={'/servicios'} className='mt-2 underline'>
            Sobre Mi
          </Link>
        </div>
        <div className='flex flex-row justify-center text-black pb-6 mt-4'>
          <Link
            to={'/contacto'}
            className='bg-white text-[#f66] p-2 mr-4 rounded-sm hover:bg-slate-300 duration-300'>
            Contacto
          </Link>
          <Link
            to={'/consulta-online'}
            className='bg-white hover:bg-slate-300 duration-300 text-[#f66] p-2 rounded-sm duration-300 '>
            Consulta Online
          </Link>
        </div>
      </div>
    </section>
  )
}
