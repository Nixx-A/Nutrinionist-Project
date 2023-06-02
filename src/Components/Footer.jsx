import './Footer.css'

export function Footer() {
  return (
    <footer className='bg-[#f66] h-32 text-white flex justify-start pt-6 flex-col'>
      <div className='inline-flex justify-center h-full items-center'>
        <h2 className='font-semibold text-xl spacing duration-500 text-center'>
          Florencia Ayan
        </h2>
        <img className='w-8' src='/logo2.png' alt='food img' />
      </div>
      <p className='text-center'>@2023</p>
    </footer>
  )
}
