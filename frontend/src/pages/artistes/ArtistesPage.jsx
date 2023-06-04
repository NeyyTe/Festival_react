import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import "./artistesPage.css";
import { Helmet } from "react-helmet";

function Artistes() {
  useEffect(() => {
    const container = document.querySelector(".container");

    if (container) {
      const buttons = document.querySelectorAll(".buttonTabs button");
      const sections = document.querySelectorAll(".contentTabs section");

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
          if (!sections[i].classList.contains("activeTabs")) {
            sections.forEach((section) => {
              section.classList.remove("activeTabs");
            });

            sections[i].classList.add("activeTabs");
          }
        });
      }

      return () => {
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].removeEventListener("click", () => {
            if (!sections[i].classList.contains("activeTabs")) {
              sections.forEach((section) => {
                section.classList.remove("activeTabs");
              });

              sections[i].classList.add("activeTabs");
            }
          });
        }
      };
    }
  }, []);

  return (
    <>
      <Header />
      <Helmet>
        <title>LNS - Les artistes</title>
        <meta
          name="description"
          content="Inscrivez-vous et créer un compte 'Les Nuits Secrètes' "
        />
      </Helmet>

      <div className="container">
        <main className="main_artistes">
          <section className="buttonTabs">
            <h1>Les Artistes</h1>
            <div className="buttons_jours">
              <button>Tous</button>
              <button>Samedi</button>
              <button>Dimanche</button>
              <button>Lundi</button>
            </div>
          </section>

          <div class="contentTabs">
            <section className="tous" class="activeTabs">
              <h2>Tous </h2>
              <div className="clips activeTabs">
                <Link
                  to="https://www.youtube.com/watch?v=v2AC41dglnM"
                  className="card"
                  target="_blank"
                >
                  <img
                    src="https://m.media-amazon.com/images/I/41soqdQyqOL.jpg"
                    alt="ACDC"
                  />

                  <div className="desc">
                    <div className="title">
                      <h2>ACDC</h2>
                    </div>
                    <div>
                      <span>15/07/2023 à 17h00</span>
                    </div>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/watch?v=hLQl3WQQoQ0"
                  className="card"
                  target="_blank"
                >
                  <img
                    src="https://img.nrj.fr/oKb2HGWAOCPA6-dP8lPgGZSOaQo=/800x450/smart/medias%2F2022%2F10%2F633fd2895c870_633fd291f3b15.jpg"
                    alt="Adèle"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Adèle</h2>
                    </div>
                    <div>
                      <span>17/07/2023 à 20h00</span>
                    </div>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/watch?v=fVfnEyLOkrM"
                  className="card"
                  target="_blank"
                >
                  <img
                    src="https://images.rtl.fr/~c/2000v2000/rtl/www/1313715-portrait-de-charles-aznavour-en-2017.jpg"
                    alt="Charles Aznavour"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Charles Aznavour</h2>
                    </div>
                    <div>
                      <span>16/07/2023 à 18h00</span>
                    </div>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/watch?v=HXdP15Ubu6M"
                  className="card"
                  target="_blank"
                >
                  <img
                    src="https://media.ouest-france.fr/v1/pictures/cdd44ecebd5f9ffb9bd1c175dabfdfe4-daniel-balavoine-vivre-ou-survivre-documentaire-musique-programme-tv.jpg?width=1260&sign=0fd247ddc20c41dd21171c77f20cf5c5fc4b62e2a96f13e7a30f5e78b5d7ef99&client_id=bpservices"
                    alt=""
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Daniel Balavoine</h2>
                    </div>
                    <div>
                      <span>16/07/2023 à 19h00</span>
                    </div>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/watch?v=13EsiCjsssY"
                  className="card"
                >
                  <img
                    src="https://i.pinimg.com/736x/71/45/fa/7145fa77c73fe3421de13d4c0f1498a2.jpg"
                    alt="David Guetta"
                    target="_blank"
                  />

                  <div className="desc">
                    <div className="title">
                      <h2>David Guetta</h2>
                    </div>
                    <div>
                      <span>15/07/2023 à 15h00</span>
                    </div>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/watch?v=HMUDVMiITOU"
                  className="card"
                  target="_blank"
                >
                  <img
                    src="https://img.lemde.fr/2019/07/26/0/0/5304/7952/664/0/75/0/619691a_x2lrCTmifjx801mbfTcMyd4n.jpg"
                    alt="Dj Snake"
                  />

                  <div className="desc">
                    <div className="title">
                      <h2>Dj Snake</h2>
                    </div>
                    <div>
                      <span>15/07/2023 à 16h00</span>
                    </div>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/watch?v=3YxaaGgTQYM"
                  className="card"
                  target="_blank"
                >
                  <img
                    src="https://images.epagine.fr/327/0601501306327.jpg"
                    alt="Evanescence"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Evanescence</h2>
                    </div>
                    <div>
                      <span>17/07/2023 à 18h00</span>
                    </div>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/watch?v=H77fRz1rybs"
                  className="card"
                  target="_blank"
                >
                  <img
                    src="https://www.rollingstone.fr/wp-content/uploads/2021/12/james-brown-1980.jpg"
                    alt="James brown"
                  />

                  <div className="desc">
                    <div className="title">
                      <h2>James Brown</h2>
                    </div>
                    <div>
                      <span>15/07/2023 à 18h00</span>
                    </div>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/watch?v=bo_efYhYU2A"
                  className="card"
                  target="_blank"
                >
                  <img
                    src="https://www.europe2.fr/wp-content/uploads/europeradio/2022/03/media-5216.jpg"
                    alt="Lady Gaga"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Lady Gaga</h2>
                    </div>
                    <div>
                      <span>17/07/2023 à 17h00</span>
                    </div>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/watch?v=TdrL3QxjyVw"
                  className="card"
                  target="_blank"
                >
                  <img
                    src="https://img.lemde.fr/2012/01/30/0/8/1662/1108/1440/960/60/0/ill_1636248_6475_lana-del-rey.jpg"
                    alt="Lana Del Rey"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Lana Del Rey</h2>
                    </div>
                    <div>
                      <span>17/07/2023 à 15h00</span>
                    </div>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/watch?v=eVTXPUF4Oz4"
                  className="card"
                  target="_blank"
                >
                  <img
                    src="https://m.media-amazon.com/images/I/81iC+O0ec2L._SL1448_.jpg"
                    alt="Linkin Park"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Linkin Park</h2>
                    </div>
                    <div>
                      <span>16/07/2023 à 15h00</span>
                    </div>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/watch?v=wEERFBI9eCg"
                  className="card"
                  target="_blank"
                >
                  <img
                    src="https://nightwish.fr/nwf2020/wp-content/uploads/2020/02/Nightwish2020n700.jpg"
                    alt="NighWish"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>NightWish</h2>
                    </div>
                    <div>
                      <span>17/07/2023 à 19h00</span>
                    </div>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/watch?v=bx1Bh8ZvH84"
                  className="card"
                  target="_blank"
                >
                  <img
                    src="https://images.mubicdn.net/images/cast_member/152113/cache-97268-1515719227/image-w856.jpg"
                    alt="Oasis"
                  />

                  <div className="desc">
                    <div className="title">
                      <h2>Oasis</h2>
                    </div>
                    <div>
                      <span>15/07/2023 à 20h00</span>
                    </div>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/watch?v=W3q8Od5qJio"
                  className="card"
                  target="_blank"
                >
                  <img
                    src="https://freakingeek.com/wp-content/uploads/2019/03/Rammstein-Banniere2019.jpg"
                    alt="Rammstein"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Rammstein</h2>
                    </div>
                    <div>
                      <span>16/07/2023 à 16h00</span>
                    </div>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/watch?v=YlUKcNNmywk"
                  className="card"
                  target="_blank"
                >
                  <img
                    src="https://m.media-amazon.com/images/I/91mjhjhxhVL._SL1500_.jpg"
                    alt="RHCP"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Red Hot Chili Peppers</h2>
                    </div>
                    <div>
                      <span>16/07/2023 à 17h00</span>
                    </div>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/watch?v=pRpeEdMmmQ0"
                  className="card"
                  target="_blank"
                >
                  <img
                    src="https://static.fnac-static.com/multimedia/Images/FR/NR/da/b4/58/5813466/1540-1/tsp20140303130012/Shakira.jpg"
                    alt="Shakira"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Shakira</h2>
                    </div>
                    <div>
                      <span>17/07/2023 à 16h00</span>
                    </div>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/watch?v=5abamRO41fE"
                  className="card"
                  target="_blank"
                >
                  <img
                    src="https://rockmetalmag.fr/wp-content/uploads/2022/07/287332231_590922035731094_4495538568440360900_n.jpg"
                    alt="Slipknot"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Slipknot</h2>
                    </div>
                    <div>
                      <span>16/07/2023 à 20h00</span>
                    </div>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/watch?v=0CFuCYNx-1g"
                  className="card"
                  target="_blank"
                >
                  <img 
                    src="https://www.kuvo.org/wp-content/uploads/2020/05/STEVIE-WONDER.jpg"
                    alt="Stevie Wonder"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Stevie Wonder</h2>
                    </div>
                    <div>
                      <span>15/07/2023 à 19h00</span>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
            <section id="Samedi">
              <h2>Samedi</h2>
              <div className="clips activeTabs">
                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://i.pinimg.com/736x/71/45/fa/7145fa77c73fe3421de13d4c0f1498a2.jpg"
                    alt="David Guetta"
                  />

                  <div className="desc">
                    <div className="title">
                      <h2>David Guetta</h2>
                    </div>
                    <div>
                      <span>15/07/2023 à 15h00</span>
                    </div>
                  </div>
                </Link>

                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://img.lemde.fr/2019/07/26/0/0/5304/7952/664/0/75/0/619691a_x2lrCTmifjx801mbfTcMyd4n.jpg"
                    alt="Dj Snake"
                  />

                  <div className="desc">
                    <div className="title">
                      <h2>Dj Snake</h2>
                    </div>
                    <div>
                      <span>15/07/2023 à 16h00</span>
                    </div>
                  </div>
                </Link>

                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://m.media-amazon.com/images/I/41soqdQyqOL.jpg"
                    alt="ACDC"
                  />

                  <div className="desc">
                    <div className="title">
                      <h2>ACDC</h2>
                    </div>
                    <div>
                      <span>15/07/2023 à 17h00</span>
                    </div>
                  </div>
                </Link>

                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://www.rollingstone.fr/wp-content/uploads/2021/12/james-brown-1980.jpg"
                    alt="James brown"
                  />

                  <div className="desc">
                    <div className="title">
                      <h2>James Brown</h2>
                    </div>
                    <div>
                      <span>15/07/2023 à 18h00</span>
                    </div>
                  </div>
                </Link>

                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://www.kuvo.org/wp-content/uploads/2020/05/STEVIE-WONDER.jpg"
                    alt="Stevie Wonder"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Stevie Wonder</h2>
                    </div>
                    <div>
                      <span>15/07/2023 à 19h00</span>
                    </div>
                  </div>
                </Link>

                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://images.mubicdn.net/images/cast_member/152113/cache-97268-1515719227/image-w856.jpg"
                    alt="Oasis"
                  />

                  <div className="desc">
                    <div className="title">
                      <h2>Oasis</h2>
                    </div>
                    <div>
                      <span>15/07/2023 à 20h00</span>
                    </div>
                  </div>
                </Link>
              </div>
            </section>

            <section id="Dimanche">
              <h2>Dimanche</h2>

              <div className="clips activeTabs">
                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://m.media-amazon.com/images/I/81iC+O0ec2L._SL1448_.jpg"
                    alt="Linkin Park"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Linkin Park</h2>
                    </div>
                    <div>
                      <span>16/07/2023 à 15h00</span>
                    </div>
                  </div>
                </Link>

                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://freakingeek.com/wp-content/uploads/2019/03/Rammstein-Banniere2019.jpg"
                    alt="Rammstein"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Rammstein</h2>
                    </div>
                    <div>
                      <span>16/07/2023 à 16h00</span>
                    </div>
                  </div>
                </Link>

                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://m.media-amazon.com/images/I/91mjhjhxhVL._SL1500_.jpg"
                    alt="RHCP"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Red Hot Chili Peppers</h2>
                    </div>
                    <div>
                      <span>16/07/2023 à 17h00</span>
                    </div>
                  </div>
                </Link>

                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://images.rtl.fr/~c/2000v2000/rtl/www/1313715-portrait-de-charles-aznavour-en-2017.jpg"
                    alt="Charles Aznavour"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Charles Aznavour</h2>
                    </div>
                    <div>
                      <span>16/07/2023 à 18h00</span>
                    </div>
                  </div>
                </Link>

                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://media.ouest-france.fr/v1/pictures/cdd44ecebd5f9ffb9bd1c175dabfdfe4-daniel-balavoine-vivre-ou-survivre-documentaire-musique-programme-tv.jpg?width=1260&sign=0fd247ddc20c41dd21171c77f20cf5c5fc4b62e2a96f13e7a30f5e78b5d7ef99&client_id=bpservices"
                    alt=""
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Daniel Balavoine</h2>
                    </div>
                    <div>
                      <span>16/07/2023 à 19h00</span>
                    </div>
                  </div>
                </Link>

                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://rockmetalmag.fr/wp-content/uploads/2022/07/287332231_590922035731094_4495538568440360900_n.jpg"
                    alt="Slipknot"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Slipknot</h2>
                    </div>
                    <div>
                      <span>16/07/2023 à 20h00</span>
                    </div>
                  </div>
                </Link>
              </div>
            </section>

            <section id="Lundi">
              <h2>Lundi</h2>
              <div className="clips activeTabs">
                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://img.lemde.fr/2012/01/30/0/8/1662/1108/1440/960/60/0/ill_1636248_6475_lana-del-rey.jpg"
                    alt="Lana Del Rey"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Lana Del Rey</h2>
                    </div>
                    <div>
                      <span>17/07/2023 à 15h00</span>
                    </div>
                  </div>
                </Link>

                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://static.fnac-static.com/multimedia/Images/FR/NR/da/b4/58/5813466/1540-1/tsp20140303130012/Shakira.jpg"
                    alt="Shakira"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Shakira</h2>
                    </div>
                    <div>
                      <span>17/07/2023 à 16h00</span>
                    </div>
                  </div>
                </Link>

                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://www.europe2.fr/wp-content/uploads/europeradio/2022/03/media-5216.jpg"
                    alt="Lady Gaga"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Lady Gaga</h2>
                    </div>
                    <div>
                      <span>17/07/2023 à 17h00</span>
                    </div>
                  </div>
                </Link>

                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://images.epagine.fr/327/0601501306327.jpg"
                    alt="Evanescence"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Evanescence</h2>
                    </div>
                    <div>
                      <span>17/07/2023 à 18h00</span>
                    </div>
                  </div>
                </Link>

                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://nightwish.fr/nwf2020/wp-content/uploads/2020/02/Nightwish2020n700.jpg"
                    alt="NighWish"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>NightWish</h2>
                    </div>
                    <div>
                      <span>17/07/2023 à 19h00</span>
                    </div>
                  </div>
                </Link>

                <Link to="https://www.youtube.com" className="card">
                  <img
                    src="https://img.nrj.fr/oKb2HGWAOCPA6-dP8lPgGZSOaQo=/800x450/smart/medias%2F2022%2F10%2F633fd2895c870_633fd291f3b15.jpg"
                    alt="Adèle"
                  />
                  <div className="desc">
                    <div className="title">
                      <h2>Adèle</h2>
                    </div>
                    <div>
                      <span>17/07/2023 à 20h00</span>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
            <div className="cta_wrapper">
              <Link to="/tickets" className="tickets_cta">
                Voir tout les tickets
              </Link>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Artistes;
