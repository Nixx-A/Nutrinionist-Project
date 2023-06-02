import { AiOutlineCalendar } from 'react-icons/ai'
import { useForm } from 'react-hook-form'

export function Contacto() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  onsubmit = data => console.log(data)
  console.log(errors)

  return (
    <section className='flex justify-center  items-center pt-12 flex-col'>
      <div className='inline-flex flex-row text-[#f33] text-2xl'>
        <AiOutlineCalendar
          className='mr-2 text-3xl relative
        '
        />
        <h2 className=''>Contacto</h2>
      </div>
      <div className='mt-6'>
        <p>Ponte en contacto directo conmigo</p>
      </div>
      <form
        className='flex flex-col mt-11 mb-2'
        onSubmit={handleSubmit(onsubmit)}>
        <label htmlFor='Nombre'>Nombre</label>
        {errors.Nombre && (
          <p className='text-red-500'>{errors.Nombre?.message}</p>
        )}
        <input
          className='border-2'
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
          <p className='text-red-500'>{errors.Telefono?.message}</p>
        )}
        <input
          className='border-2 mb-2 placeholder:text-sm w-72 '
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
        <label htmlFor='Mensaje'>Mensaje</label>
        <textarea
          className='border-2'
          name='Mensaje'
          {...register('Mensaje', { maxLength: 12 })}
        />
        <button className='bg-black mt-4 text-white p-2 rounded-sm '>
          Enviar
        </button>
      </form>
    </section>
  )
}
/*
  errors.Email && <p className='text-red-500'>{errors.Email?.message}</p>
 */
