import { BiClinic } from 'react-icons/bi'
import {
  MdFamilyRestroom,
  MdOutlineScience,
  MdSportsFootball
} from 'react-icons/md'

export function EspecialidadInfo() {
  return (
    <section className='bg-[#fafafa] :bg-slate-900 :text-white flex justify-center pt-16  items-center flex-col lg:flex-row  pb-16 border-gray-300 border-b-2'>
      <article className='w-4/6 '>
        <h2 className='text-center text-xl font-semibold'>
          ¿Que es un nutricionista clinico?
        </h2>
        <p className='text-center font-serif m-2'>
          El nutricionista clínico es un profesional de salud que tiene como
          objetivo la prevención de las situaciones relacionadas con la
          alteración del estado de nutrición, como la desnutrición
          intrahospitalaria, a través de la aplicación del proceso de atención
          nutricional orientado con la finalidad de individualizar,
          profesionalizar y asegurar un manejo de calidad.
        </p>
        <p className='text-center m-2'>
          La nutrición clínica es una ciencia que se ocupa de la prevención,
          diagnóstico y manejo de los cambios metabólicos y del estado
          nutricional, relacionados con cualquier enfermedad aguda o crónica,
          como con aquellas condiciones causadas por carencia o exceso de
          energía y nutrimentos.
        </p>
        <p className='text-center m-2'>
          Entonces, el estado nutricional es determinante en el pronóstico
          clínico y que las alteraciones de la composición corporal, capacidad
          de ingestión, digestión, absorción, utilización y/o excreción,
          modificará la adaptación a la enfermedad y respuesta al tratamiento.
        </p>
      </article>
      <article>
        <h2 className='text-center text-xl font-semibold mt-4 mx-2'>
          Ambitos de trabajo de un nutricionista
        </h2>
        <ul className='flex flex-col justify-center items-center text-xl'>
          <div className='inline-flex  justify-center items-center mt-2'>
            <MdFamilyRestroom className='w-8 h-8' />
            <li className='ml-2 font-light w-24'>Alimentacion Comunitaria</li>
          </div>
          <div className='inline-flex justify-center items-center mt-2'>
            <BiClinic className='w-8 h-8' />
            <li className='ml-2 font-light w-24'>Nutrición Clínica</li>
          </div>
          <div className='inline-flex justify-center items-center mt-2'>
            <MdSportsFootball className='w-8 h-8' />
            <li className='ml-2 font-light w-24'>Nutrición Deportiva</li>
          </div>
          <div className='inline-flex justify-center items-center mt-2'>
            <MdOutlineScience className='w-8 h-8 mt-0.5' />
            <li className='ml-2 font-light w-24'>Investigacion</li>
          </div>
        </ul>
      </article>
    </section>
  )
}
