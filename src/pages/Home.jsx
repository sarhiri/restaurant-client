import Header from '../components/Header'
import Rating from '../components/Ratings'
import Grid from '../components/Grid'
import FoodGrid from '../components/FoodGrid'
import Tiles from '../components/TileRow'


function Home () {
  return (
   <> 
   <Header />
   <FoodGrid />
   {/* <Tiles /> */}
   {/* <Grid /> */}
   <Rating />
   </>
  )
 }
 
 export default Home; 