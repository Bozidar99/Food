import Logo from '../assets/logo.png'
import Picture from '../assets/pic1.png'

function AboutPage() {
  return (
    <div className='container mx-auto bg-gray-400'>
      <div>
        
        <img src={Logo} alt='logo' className='w-[520px] h-[520px] float-left p-4'/>
        
        <h3 className='text-3xl font-bold p-4 text-blue-900'>About Us</h3>
        <p className='text-xl p-4 text-yellow-900'>Welcome to our restaurant, where the love for traditional recipes meets contemporary culinary techniques to offer you a unique gastronomic experience. Our restaurant is a place where tradition and taste come together, with every bite telling the story of our rich culinary heritage.</p>
        
        <h3 className='text-3xl font-bold p-4 text-blue-900'>Our Mission</h3>
        <p className='text-xl p-4 text-yellow-900'>Our mission is to revive forgotten recipes that have been passed down from generation to generation. We believe that food is not just fuel for the body but a bridge that connects us to our roots and traditions. All our recipes are carefully selected and prepared with love, using only the finest, freshest, and locally sourced ingredients.</p>
        
        <h3 className='text-3xl font-bold p-4 text-blue-900'>Our Story</h3>
        <p className='text-xl p-4 text-yellow-900'>Our story began many years ago when our grandmothers and grandfathers lovingly prepared traditional dishes in their kitchens. Their passion for cooking and dedication to detail inspired us to open this restaurant. Each recipe we prepare has its own history and story, which we are eager to share with you.</p>
        
        
        <h3 className='text-3xl font-bold p-4 text-blue-900'>Our Recipes</h3>
        <p className='text-xl p-4 text-yellow-900'>On our menu, you will find a variety of dishes that reflect the richness and diversity of our culinary heritage. From fragrant soups and stews to delicious meat and fish specialties, homemade pasta, and irresistible desserts – every bite is a journey through time. Our secret lies in the careful selection of ingredients and traditional preparation methods that have stood the test of time.</p>
        
        <img src={Picture} alt='' className='w-[520px] h-[520px] float-right p-4'/>
        <h3 className='text-3xl font-bold p-4 text-blue-900'>Commitment to Quality</h3>
        <p className='text-xl p-4 text-yellow-900'>We believe that quality has no compromise. That's why we carefully select all our ingredients, partnering with local producers who share our passion for authenticity and freshness. Our chefs are masters of their craft, dedicated to ensuring that every meal is perfect and that every guest leaves our restaurant with a smile.</p>
        
        <h3 className='text-3xl font-bold p-4 text-blue-900'>Ambience</h3>
        <p className='text-xl p-4 text-yellow-900'>Our restaurant is designed to provide a warm and welcoming atmosphere, where you can relax and enjoy your meal as if you were at home. The ambience exudes the charm of bygone eras, with carefully chosen details that evoke memories of our grandmothers' kitchens. We want you to feel like part of our family, enjoying every moment spent with us.</p>
        
        <h3 className='text-3xl font-bold p-4 text-blue-900'>An Invitation to Enjoy</h3>
        <p className='text-xl p-4 text-yellow-900'>We invite you to come and discover the charm of our traditional recipes. Whether you come with family, friends, or alone, our restaurant is the perfect place for all lovers of good food and authentic experiences. We are proud of our tradition and look forward to sharing it with you.</p>
      
      </div>
    </div>
  )
}

export default AboutPage
