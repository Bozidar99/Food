import promPic1 from '../assets/1.png'
import promPic2 from '../assets/2.png'
import promPic3 from '../assets/3.png'
import promPic4 from '../assets/4.png'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='container mx-auto bg-gray-400'>
      <h1 className='text-4xl font-bold p-10 text-blue-900 text-center'>Welcome to Our Restaurant</h1>
      <p className='text-2xl p-4 text-yellow-900'>At our restaurant, we bring the essence of traditional cooking to your table, offering a warm and inviting atmosphere where every meal is a celebration of flavors and heritage.</p>

      <h2 className='text-3xl font-bold p-5 text-blue-900 text-center'>Discover Our Heritage</h2>
      <p className='text-2xl p-4 text-yellow-900'>Step into a world where the past meets the present, where time-honored recipes are crafted with contemporary techniques to create unforgettable dining experiences. Each dish is a testament to our commitment to quality and tradition, carefully prepared using the freshest, locally-sourced ingredients.</p>

      <img src={promPic1} alt='' className=' w-[620px] h-[720px] float-left p-4' />
      <h2 className='text-3xl font-bold p-5 text-blue-900 text-center'>Our Menu</h2>
      <p className='text-2xl p-4 text-yellow-900'>Explore a menu that honors the culinary legacy of our ancestors. From hearty soups and stews to delectable main courses and mouthwatering desserts, every bite tells a story of passion and dedication. Our chefs are devoted to preserving the authenticity of each recipe while adding their own creative touch.</p>

      <h2 className='text-3xl font-bold p-5 text-red-900 underline text-center'>A Cozy Ambience</h2>
      <p className='text-2xl p-4 text-yellow-900'>Our restaurant is designed to make you feel at home. With a cozy and rustic decor that evokes the charm of yesteryears, you can relax and enjoy your meal in a setting that feels both familiar and special. Whether you’re here for a casual lunch, a family dinner, or a special occasion, our welcoming staff will ensure your experience is nothing short of exceptional.</p>

      <h2 className='text-3xl font-bold p-5 text-blue-900 text-center'>Join Us</h2>
      <p className='text-2xl p-4 text-yellow-900'>We invite you to join us on a culinary journey that celebrates the rich traditions of our past. Bring your family and friends and savor the flavors that have stood the test of time. At our restaurant, every meal is more than just food – it’s a connection to our heritage and a tribute to the art of cooking.</p>

      <h2 className='text-3xl font-bold p-5 text-blue-900 text-center'>Our ideas for you to enjoy</h2>
      <div className='flex flex-row'>
        <img src={promPic2} alt='' className=' w-[620px] h-[720px]  p-4' />
        <img src={promPic3} alt='' className=' w-[620px] h-[720px]  p-4' />
        <img src={promPic4} alt='' className=' w-[620px] h-[720px]  p-4' />
      </div>

      <div className='flex justify-center items-center p-10'>
        <Link to='/reservation' className=' text-center w-[400px] h-[50px] rounded-2xl p-2 bg-yellow-500  text-blue-900 text-2xl font-bold border-2 border-blue-900'><em>Reservation Now </em></Link>
      </div>
    </div>
  )
}

export default HomePage
