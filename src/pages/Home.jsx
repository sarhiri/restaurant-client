import Header from '../components/Header'
import Rating from '../components/Ratings'
import Grid from '../components/Grid'
import FoodGrid from '../components/FoodGrid'
import Hours from '../components/Hours'



function Home () {
  return (
   <> 
   <Header />
   <FoodGrid />
   {/* <Grid /> */}
   <Rating />
   <Hours />
   </>
  )
 }
 
 export default Home; 