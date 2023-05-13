import React from "react";
import Header from "../../components/header/Header";
import "./artistesPage.css";
import "./js.js";



function Artistes() {
  return (
    <>
      <Header />

     
      <div className="container containerClips">
           

           <nav className="slideBar">
               <ul>
                   <li><a href="clips.html"><i className="fa-solid fa-hand-holding-heart"></i> Faire un don</a></li>
                   <li><a href="shop.html"><i className="fa-solid fa-cart-shopping"></i> La boutique</a></li>
                   <li><a href="clips.html">Tops</a></li>
                   <li><a href="clips.html">Best of</a></li>
                   <li><a href="clips.html">Tops par streamers</a></li>
                   <li><a href="clips.html">Récents</a></li>
                   <li><a href="clips.html">Streamers</a></li>
                   <li><a href="clips.html">Jeux</a></li>
               </ul>
           </nav>
       
           <main>
               <div className="filterClips">
                   <button className="buttonSlideBar" aria-label="Afficher/Masquer sidebar"><i className="fa-solid fa-bars fa-2x"></i></button>
                   <button className="buttonTabs activeClips">Tout le week-end</button>
                   <button className="buttonTabs">Samedi</button>
                   <button className="buttonTabs">Dimanche</button>
                   <button className="buttonTabs">Lundi</button>
               </div>
       
               <h1>Les plus vues</h1>
       
               <div className="pagination">
                   <button>1</button>
               </div>
       
               <div className="clips clipsWeekEnd activeTabs">
       
                   <a href="https://www.youtube.com" className="card">
                       
                      <img src="https://i.pinimg.com/736x/71/45/fa/7145fa77c73fe3421de13d4c0f1498a2.jpg" alt="david guetta" />
                       
                       <div className="desc">
                          
                           <div className="title">
                              
                               <h2>David Guetta</h2>
                           </div> 
                           <div><span>15/07/2023 à 15h00</span></div>
                          
                       </div>
                   </a>
       
                   <a href="https://www.youtube.com" className="card">
                       
                      <img src="https://img.lemde.fr/2019/07/26/0/0/5304/7952/664/0/75/0/619691a_x2lrCTmifjx801mbfTcMyd4n.jpg" alt="dj snake" />
                       
                       <div className="desc">
                          
                           <div className="title">
                              
                               <h2>Dj Snake</h2>
                           </div> 
                           <div><span>15/07/2023 à 16h00</span></div>
                          
                       </div>
                   </a>
                   
                   <a href="https://www.youtube.com" className="card">
                       
                      <img src="https://m.media-amazon.com/images/I/41soqdQyqOL.jpg" alt="ACDC" />
                       
                       <div className="desc">
                          
                           <div className="title">
                              
                               <h2>ACDC</h2>
                           </div> 
                           <div><span>15/07/2023 à 17h00</span></div>
                          
                       </div>
                   </a>
       
                   <a href="https://www.youtube.com" className="card">
                       
                      <img src="https://www.rollingstone.fr/wp-content/uploads/2021/12/james-brown-1980.jpg" alt="james brown" />
                       
                       <div className="desc">
                          
                           <div className="title">
                              
                               <h2>James Brown</h2>
                           </div> 
                           <div><span>15/07/2023 à 18h00</span></div>
                          
                       </div>
                   </a>
       
                   <a href="https://www.youtube.com" className="card">
                       
                      <img src="https://www.kuvo.org/wp-content/uploads/2020/05/STEVIE-WONDER.jpg" alt="" />
                       
                       <div className="desc">
                          
                           <div className="title">
                              
                               <h2>Stewie Wonder</h2>
                           </div> 
                           <div><span>01/01/2022 à 01:00:00</span></div>
                          
                       </div>
                   </a>
       
                   <a href="https://www.youtube.com" className="card">
                       
                      <img src="https://i.pinimg.com/736x/71/45/fa/7145fa77c73fe3421de13d4c0f1498a2.jpg" alt="" />
                       
                       <div className="desc">
                          
                           <div className="title">
                              
                               <h2>David Guetta</h2>
                           </div> 
                           <div><span>01/01/2022 à 01:00:00</span></div>
                          
                       </div>
                   </a>
       
                   <a href="https://www.youtube.com" className="card">
                       
                      <img src="https://i.pinimg.com/736x/71/45/fa/7145fa77c73fe3421de13d4c0f1498a2.jpg" alt="" />
                       
                       <div className="desc">
                          
                           <div className="title">
                              
                               <h2>David Guetta</h2>
                           </div> 
                           <div><span>01/01/2022 à 01:00:00</span></div>
                          
                       </div>
                   </a>
       
                   <a href="https://www.youtube.com" className="card">
                       
                      <img src="https://i.pinimg.com/736x/71/45/fa/7145fa77c73fe3421de13d4c0f1498a2.jpg" alt="" />
                       
                       <div className="desc">
                          
                           <div className="title">
                              
                               <h2>David Guetta</h2>
                           </div> 
                           <div><span>01/01/2022 à 01:00:00</span></div>
                          
                       </div>
                   </a>
       
                   <a href="https://www.youtube.com" className="card">
                       
                      <img src="https://i.pinimg.com/736x/71/45/fa/7145fa77c73fe3421de13d4c0f1498a2.jpg" alt="" />
                       
                       <div className="desc">
                          
                           <div className="title">
                              
                               <h2>David Guetta</h2>
                           </div> 
                           <div><span>01/01/2022 à 01:00:00</span></div>
                          
                       </div>
                   </a>
       
                   <a href="https://www.youtube.com" className="card">
                       
                      <img src="https://i.pinimg.com/736x/71/45/fa/7145fa77c73fe3421de13d4c0f1498a2.jpg" alt="" />
                       
                       <div className="desc">
                          
                           <div className="title">
                              
                               <h2>David Guetta</h2>
                           </div> 
                           <div><span>01/01/2022 à 01:00:00</span></div>
                          
                       </div>
                   </a>
       
                   <a href="https://www.youtube.com" className="card">
                       
                      <img src="https://i.pinimg.com/736x/71/45/fa/7145fa77c73fe3421de13d4c0f1498a2.jpg" alt="" />
                       
                       <div className="desc">
                          
                           <div className="title">
                              
                               <h2>David Guetta</h2>
                           </div> 
                           <div><span>01/01/2022 à 01:00:00</span></div>
                          
                       </div>
                   </a>
       
                   <a href="https://www.youtube.com" className="card">
                       
                      <img src="https://i.pinimg.com/736x/71/45/fa/7145fa77c73fe3421de13d4c0f1498a2.jpg" alt="" />
                       
                       <div className="desc">
                          
                           <div className="title">
                              
                               <h2>David Guetta</h2>
                           </div> 
                           <div><span>01/01/2022 à 01:00:00</span></div>
                          
                       </div>
                   </a>
       
                   <a href="https://www.youtube.com" className="card">
                       
                      <img src="https://i.pinimg.com/736x/71/45/fa/7145fa77c73fe3421de13d4c0f1498a2.jpg" alt="" />
                       
                       <div className="desc">
                          
                           <div className="title">
                              
                               <h2>David Guetta</h2>
                           </div> 
                           <div><span>01/01/2022 à 01:00:00</span></div>
                          
                       </div>
                   </a><a href="https://www.youtube.com" className="card">
                       
                       <img src="https://i.pinimg.com/736x/71/45/fa/7145fa77c73fe3421de13d4c0f1498a2.jpg" alt="" />
                        
                        <div className="desc">
                           
                            <div className="title">
                               
                                <h2>David Guetta</h2>
                            </div> 
                            <div><span>01/01/2022 à 01:00:00</span></div>
                           
                        </div>
                    </a><a href="https://www.youtube.com" className="card">
                       
                       <img src="https://i.pinimg.com/736x/71/45/fa/7145fa77c73fe3421de13d4c0f1498a2.jpg" alt="" />
                        
                        <div className="desc">
                           
                            <div className="title">
                               
                                <h2>David Guetta</h2>
                            </div> 
                            <div><span>01/01/2022 à 01:00:00</span></div>
                           
                        </div>
                    </a>
       
       
               </div>
       
               <div className="clips clipsFriday">
       
                   <a href="https://www.youtube.com" className="card">
                       <div className="video">
                           <video src="" controls></video>
                       </div>
                       <div className="desc">
                           <div className="title">
                           <div><span>1 000 0700 Vues</span><span>01/01/2022 à 01:00:00</span></div>
                               <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/2895647a-2e57-45ac-a42c-0a837d42f9a1-profile_image-300x300.png" alt=""/>
                               <h2>YO</h2>
                           </div>
                         
                       </div>
                   </a>
       
               </div>
       
               <div className="clips clipSaturday">
       
                   <a href="https://www.youtube.com" className="card">
                       <div className="video">
                           <video src="" controls></video>
                       </div>
                       <div className="desc">
                           <div><span>1 000 000 Vues</span><span>01/01/2022 à 01:00:00</span></div>
                           <div className="title">
                               <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/2895647a-2e57-45ac-a42c-0a837d42f9a1-profile_image-300x300.png" alt=""/>
                               <h2>Titre video</h2>
                           </div>
                           <p><span>Nom Streamer</span> - <span>Activité</span></p>
                       </div>
                   </a>
       
               </div>
       
               <div className="clips clipsSunday">
       
                   <a href="https://www.youtube.com" className="card">
                       <div className="video">
                           <video src="" controls></video>
                       </div>
                       <div className="desc">
                           <div><span>1 000 000 Vues</span><span>01/01/2022 à 01:00:00</span></div>
                           <div className="title">
                               <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/2895647a-2e57-45ac-a42c-0a837d42f9a1-profile_image-300x300.png" alt=""/>
                               <h2>Titre video</h2>
                           </div>
                           <p><span>Nom Streamer</span> - <span>Activité</span></p>
                       </div>
                   </a>
       
               </div>
       
           </main>
           
       </div>



</>
  )
}

export default Artistes