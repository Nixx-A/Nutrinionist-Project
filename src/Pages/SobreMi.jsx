import './SobreMi.css'
export function SobreMi() {
  return (
    <section className='bg-[#f6f6f6] text-black w-screen  items-center flex justify-center h-screen flex-col '>
      <div className='bg-[#f88] absolute top-6 lg:h-4/6  md:relative md:flex md:flex-col md:justify-center md:items-center h-max w-5/6 m-6 p-4 shadow-xl '>
        <img
          className=' w-32 h-32 mx-auto rounded-full object-cover'
          src='/public/flor.jpg'
          alt=''
        />
        <p className='p-2 mx-2'>
          ¡Bienvenidos al mundo de la nutrición clínica! Me complace darte la
          bienvenida a mi página web. Soy Florencia Ayan, una nutricionista
          especializada en clínica. Estoy aquí para ayudarte a alcanzar tus
          objetivos de salud y bienestar a través de una alimentación adecuada y
          personalizada. Como nutricionista clínica, he dedicado años de estudio
          y experiencia a comprender cómo la nutrición impacta nuestra salud.
          <strong>
            Mi objetivo principal es proporcionarte las herramientas y el
            conocimiento necesarios para que puedas tomar decisiones informadas
          </strong>
          sobre tu alimentación y lograr un estilo de vida saludable. Entiendo
          que cada persona es única, por lo que mi enfoque se basa en diseñar
          planes nutricionales adaptados a tus necesidades individuales. Trabajo
          de cerca contigo, teniendo en cuenta tus metas, preferencias
          alimentarias y condiciones médicas, para crear un plan que sea
          realista y efectivo. En esta página web, encontrarás una variedad de
          recursos útiles, desde artículos informativos sobre nutrición hasta
          recetas saludables y consejos prácticos para mantener un estilo de
          vida equilibrado. También ofrezco servicios de consulta personalizada,
          donde podemos analizar tu historial médico y crear un plan nutricional
          a medida que se ajuste a tus necesidades específicas.
        </p>
        <p className='p-2 m-2'>
          Mi pasión por la nutrición y mi compromiso con la excelencia me
          impulsan a estar siempre actualizada con las últimas investigaciones y
          avances en el campo de la nutrición clínica. Esto me permite brindarte
          recomendaciones basadas en evidencia científica, garantizando que
          recibas la mejor atención posible. Estoy emocionada de poder
          acompañarte en tu camino hacia una vida más saludable. Si estás
          listo/a para dar el primer paso, te animo a explorar esta página web y
          a contactarme para programar una consulta personalizada. Juntos,
          podemos lograr tus objetivos de salud y bienestar.
        </p>

        <h3 className='text-center font'>
          Florencia Ayan Nutricionista Especializada en Clínica
        </h3>
      </div>
    </section>
  )
}
