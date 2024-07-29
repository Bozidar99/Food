import { useFormik } from 'formik'
import * as Yup from 'yup'

function ReservationPage() {

  const formik = useFormik({
    // initialValues
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      date: '',
      time:  '',
      guests: ''
    },
    // Validacija
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email:  Yup.string().email('Invalid email address').required('Email is required'),
      phoneNumber:  Yup.string().required('Phone number is required'),
      date: Yup.string().required('Date is required'),
      time:  Yup.string().required('Time is required'),
      guests:  Yup.string().required('Guests is required')
    }),
    // Submit Form
    onSubmit: (values) => {
      console.log(values)

      formik.resetForm()
    }
  })

  const showError = (name) => formik.errors[name] && formik.touched[name] && formik.errors[name]
  return (
    <div className='container mx-auto bg-gray-400 p-6'>
      <h1 className='text-3xl font-bold p-4 text-blue-900 text-center'>Reservation</h1>

      <form onSubmit={formik.handleSubmit} className='flex flex-col p-4 border-4 border-yellow-500 m-2 bg-gray-300 rounded-2xl gap-4'>
        <label htmlFor='firstName' className='text-2xl font-bold text-blue-900'>First Name: <span>{showError('firstName')}</span></label>
        <input type='text' placeholder='Inser your first name' id='firstName'   className=' h-[50px] rounded-2xl p-2 border-4 border-yellow-500 outline-none placeholder:text-blue-900 text-blue-700' name='firstName' value={formik.values.firstName} onChange={formik.handleChange}></input>

        <label htmlFor='lastName' className='text-2xl font-bold text-blue-900'>Last Name: <span>{showError('lastName')}</span></label>
        <input type='text' placeholder='Inser your last name' id='lastName' className=' h-[50px] rounded-2xl p-2 border-4 border-yellow-500 outline-none placeholder:text-blue-900 text-blue-700' name='lastName' value={formik.values.lastName} onChange={formik.handleChange}></input>

        <label htmlFor='email' className='text-2xl font-bold text-blue-900'>Email: <span>{showError('email')}</span></label>
        <input type='email' placeholder='Inser your email' id='email' className=' h-[50px] rounded-2xl p-2 border-4 border-yellow-500 outline-none placeholder:text-blue-900 text-blue-700' name='email' value={formik.values.email} onChange={formik.handleChange}></input>

        <label htmlFor='phoneNumber' className='text-2xl font-bold text-blue-900'>Phone Number: <span>{showError('phoneNumber')}</span></label>
        <input type='text' placeholder='Inser your phone number' id='phoneNumber' className=' h-[50px] rounded-2xl p-2 border-4 border-yellow-500 outline-none placeholder:text-blue-900 text-blue-700' name='phoneNumber' value={formik.values.phoneNumber} onChange={formik.handleChange}></input>

        <label htmlFor='date' className='text-2xl font-bold text-blue-900'>Date: <span>{showError('date')}</span></label>
        <input type='date' id='date' className=' h-[50px] rounded-2xl p-2 border-4 border-yellow-500 outline-none placeholder:text-blue-900 text-blue-700' name='date' value={formik.values.date} onChange={formik.handleChange}></input>

        <label htmlFor='time' className='text-2xl font-bold text-blue-900'>Time: <span>{showError('time')}</span></label>
        <input type='time' id='time' className=' h-[50px] rounded-2xl p-2 border-4 border-yellow-500 outline-none placeholder:text-blue-900 text-blue-700' name='time' value={formik.values.time} onChange={formik.handleChange}></input>

        <label htmlFor='guests' className='text-2xl font-bold text-blue-900'>Guests: <span>{showError('guests')}</span></label>
        <select id='guests' className=' h-[50px] rounded-2xl p-2 border-4 border-yellow-500 outline-none placeholder:text-blue-900 text-blue-700' name='guests' value={formik.values.guests} onChange={formik.handleChange}>
          <option value='' disabled>Guests</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
        </select>
        <div className='flex justify-center items-center'>
          <button type='submit' className=' w-[400px] h-[50px] rounded-2xl p-2 bg-yellow-500  text-blue-900 text-2xl font-bold border-2 border-blue-900'><em>Reservation Done </em></button>
        </div>
      </form>
    </div>
  )
}

export default ReservationPage
