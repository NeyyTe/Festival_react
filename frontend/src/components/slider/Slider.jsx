import React from "react";
import "./slider.css";
import {Link} from 'react-router-dom'

function Slider() {
  return (
    <>
      <div className="slider_wrapper">
        <h2>
          Les <span>Artistes</span>
        </h2>
        <div className="slider">
          <div className="item ">
            <Link to ="https://www.youtube.com/watch?v=13EsiCjsssY" className="items " >
              <img
                alt="David Guetta"
                src="https://i.pinimg.com/736x/71/45/fa/7145fa77c73fe3421de13d4c0f1498a2.jpg"
              />
              <div className="item_body">
                <h3>David Guetta</h3>
                <p>15 Juillet</p>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link to="https://www.youtube.com/watch?v=v2AC41dglnM"className="items" >
              <img
                alt="ACDC"
                src="https://m.media-amazon.com/images/I/41soqdQyqOL.jpg"
              />
              <div className="item_body">
                <h3>ACDC</h3>
                <p>15 Juillet</p>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link to="https://www.youtube.com/watch?v=H77fRz1rybs"className="items" >
              <img
                alt="James Brown"
                src="https://www.radiofrance.fr/s3/cruiser-production/2019/10/de16ba20-d8e3-493e-9bce-9c5f447a9e28/1200x680_james-brown-1969.jpg"
              />
              <div className="item_body">
                <h3>James Brown</h3>
                <p>15 Juillet</p>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link to="" className="items" >
              <img
                alt="Stewie Wonder"
                src="https://www.kuvo.org/wp-content/uploads/2020/05/STEVIE-WONDER.jpg"
              />
              <div className="item_body">
                <h3>Stevie Wonder</h3>
                <p>16 Juillet</p>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link className="items" href="">
              <img
                alt="Oasis"
                src="https://images.mubicdn.net/images/cast_member/152113/cache-97268-1515719227/image-w856.jpg"
              />
              <div className="item_body">
                <h3>Oasis</h3>
                <p>16 Juillet</p>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link className="items" href="">
              <img
                alt="Linkin Park"
                src="https://m.media-amazon.com/images/I/81iC+O0ec2L._SL1448_.jpg"
              />
              <div className="item_body">
                <h3>Linkin Park</h3>
                <p>16 Juillet</p>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link className="items" href="">
              <img
                alt="Ramstein"
                src="https://freakingeek.com/wp-content/uploads/2019/03/Rammstein-Banniere2019.jpg"
              />
              <div className="item_body">
                <h3>Rammstein</h3>
                <p>17 Juillet</p>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link className="items" href="">
              <img
                alt="Red Hot Chilli Peppers"
                src="https://m.media-amazon.com/images/I/91mjhjhxhVL._SL1500_.jpg"
              />
              <div className="item_body">
                <h3>Red Hot Chili Peppers</h3>
                <p>17 Juillet</p>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link className="items" href="">
              <img
                alt="Charles Aznavour"
                src="https://images.rtl.fr/~c/2000v2000/rtl/www/1313715-portrait-de-charles-aznavour-en-2017.jpg"
              />
              <div className="item_body">
                <h3>Charles Aznavour</h3>
                <p>17 Juillet</p>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link className="items" href="">
              <img
                alt="Daniel Balavoine"
                src="https://media.ouest-france.fr/v1/pictures/cdd44ecebd5f9ffb9bd1c175dabfdfe4-daniel-balavoine-vivre-ou-survivre-documentaire-musique-programme-tv.jpg?width=1260&sign=0fd247ddc20c41dd21171c77f20cf5c5fc4b62e2a96f13e7a30f5e78b5d7ef99&client_id=bpservices"
              />
              <div className="item_body">
                <h3>Daniel Balavoine</h3>
                <p>17 Juillet</p>
              </div>
            </Link>
          </div>

        </div>
        <div className="link_artistes_wrapper">
          <Link to = "/Artistes"  className="link_artistes">
           Découvrir tous nos artistes
          </Link>
        </div>
      </div>
    </>
  );
}

export default Slider;
