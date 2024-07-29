import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
      <h2 className='text-[72px] font-bold text-red-500 uppercase text-center p-4'>Error page</h2>

      <Link to='/' className='flex justify-center items-center text-3xl font-bold text-slate-500 uppercase  p-4'>BACK TO HOME</Link>
    </div>
  )
}

export default ErrorPage
