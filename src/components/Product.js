import one from "../assets/one img.webp"
import two from "../assets/two img.avif"
import three from "../assets/three img.avif"

function Product() {
  return (
    <div class="Products">
      <div class="box">
        <img src={one} alt=""></img>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quibusdam necessitatibus deserunt dicta tempora assumenda impedit placeat cupiditate blanditiis laborum?</p>
      </div>


      <div class="box">
        <img src={two} alt=""></img>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quibusdam necessitatibus deserunt dicta tempora assumenda impedit placeat cupiditate blanditiis laborum?</p>
      </div>



      <div class="box">
        <img src={three} alt=""></img>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quibusdam necessitatibus deserunt dicta tempora assumenda impedit placeat cupiditate blanditiis laborum?</p>
      </div>


    </div>

  )
}

export default Product
   