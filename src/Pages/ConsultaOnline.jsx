import { AiFillQuestionCircle, AiTwotoneCalendar } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { Accordion } from '../Components/Accordion'

export function ConsultaOnline() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  onsubmit = data => console.log(data)
  console.log(errors)

  return (
    <>
      <section className='flex justify-center relative md:bottom-44 lg:bottom-10 h-screen md:pt-0 items-center pt-12 flex-col'>
        <div className='inline-flex flex-row text-[#f33] text-2xl'>
          <AiTwotoneCalendar className='mr-2 text-3xl relative' />
          <h2 className=''>Consulta Online</h2>
        </div>
        <p>Solicita tu primer consulta gratuita</p>
        <div className='flex flex-col md:flex-row justify-center items-center md:justify-center w-screen '>
          <form
            className='flex flex-col justify-center mt-10 md:pr-10 lg:pr-40'
            onSubmit={handleSubmit(onsubmit)}>
            <label htmlFor='Nombre'>Nombre</label>
            {errors.Nombre && (
              <p className='text-red-500'>{errors.Nombre?.message}</p>
            )}
            <input
              className='w-72 border-2'
              name='Nombre'
              type='text'
              placeholder='Nicolas...'
              {...register('Nombre', {
                required: 'El nombre es obligatorio',
                maxLength: 80
              })}
            />
            <label htmlFor='Numero'>Número</label>
            {errors.Telefono && (
              <p data-aria-label='telefono-error' className='text-red-500'>{errors.Telefono?.message}</p>
            )}
            <input
              className='border-2 mb-2 placeholder:text-sm '
              name='Numero'
              type='tel'
              placeholder='3804267524'
              {...register('Telefono', {
                required: 'El número es obligatorio',
                maxLength: 100
              })}
            />
            <label htmlFor='Email'>Email</label>
            {errors.Email && (
              <p className='text-red-500'>{errors.Email?.message}</p>
            )}
            <input
              className='border-2 mb-2'
              name='Email'
              type='text'
              placeholder='florencia@gmail.com'
              {...register('Email', {
                required: 'El email es obligatorio',
                pattern: /^\S+@\S+$/i
              })}
            />
            <button className='bg-black mt-4 text-white p-2 rounded-sm '>
              Solicitar Consulta
            </button>
          </form>
          <div
            className=' mt-10 flex w-screen
         md:justify-between items-center flex-row justify-center  max-w-[400px] flex-wrap'>
            <div className=' m-10 w-20 h-32'>
              <img className='w-16 h-16 mb-2' src='/like.png' alt='' />
              <p className=' text-md'>Consultas personalizadas y flexibles</p>
            </div>
            <div className=' m-10 w-20 h-32'>
              <img
                className='w-16 h-16 mb-2'
                src='/schedule.png'
                alt=''
              />
              <p className='text-md'>Respuesta en 24h</p>
            </div>
            <div className=' m-10 w-20 h-32'>
              <img className='w-16 h-16 mb-2' src='/essay.png' alt='' />
              <p className='text-md'>Seguimiento de objetivos y evolución</p>
            </div>
            <div className=' m-10 w-20 h-32'>
              <img
                className='w-16 h-16 mb-2'
                src='/worldwide.png'
                alt=''
              />
              <p className='text-md'>Rápido y cómodo, a través de Internet</p>
            </div>
          </div>
        </div>
      </section>
      <article className='w-screen bg-[#88d8cc] flex justify-center flex-col items-center pb-20 mt-20'>
        <h2 className='text-center pt-8 pb-6 flex font-semibold text-2xl'>
          <AiFillQuestionCircle className='relative top-1' />
          Preguntas Frecuentes sobre las consultas onlines
        </h2>
        <Accordion question={'¿Necesito internet y una cámara / webcam?'} answer={'Lo ideal es tener una conexión a internet para poder tener la consulta en directo y yo pueda enseñarte el material que he preparado para ti. La cámara o webcam es perfecta para conocernos, pero si no tienes, podemos hacer una llamada a través de Skype. Si no dispones de internet o una buena conexión podemos hacer la consulta a través de llamada telefónica.'}/>
        <Accordion question={'¿Qué incluye la consulta online?'} answer={'La consulta online se adapta a todas tus necesidades y el material lo elaboraré a tu gusto. Después de cada consulta, te mandaré todo el material que he utilizado para que puedas hacer uso de este siempre que quieras. Resolveremos todas las dudas que tengas y trazaremos los objetivos acorde a la situación. En la misma sesión, si es preciso, fijaremos la próxima consulta.'} />
        <Accordion question={'¿Puedo hacer una consulta presencial?'} answer={'Si, siempre que lo desees. En esta consulta presencial, además de conocernos personalmente, realizaremos un estudio completo de la composición corporal totalmente gratuito.'} />
        <Accordion question={'¿Cómo tengo que pagar las consultas?'} answer={'Las consultas se pagan mediante transferencia bancaria. Cuando nos pongamos en contacto, antes de comenzar a trabajar juntos, te daré todos los datos necesarios.'} />
      </article>
    </>
  )
}
