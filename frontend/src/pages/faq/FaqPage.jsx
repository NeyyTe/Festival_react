import React from "react";
import "./faqPage.css";
import Header from "../../components/header/Header.jsx";

export default function SimpleAccordion() {
  return (
    <>
      <Header />
      {/* <section className="faq_wrapper">
        <div className="faq_inner">
          <h1>FAQ</h1>
        <div className ="details">
          <details>
          <summary> Qu'est-ce que Les Nuits Secrètes ?</summary>
          <p>Les Nuits Secrètes est un festival de musique et d'arts qui se déroule chaque année dans la ville de Cambrai, en France. C'est un événement unique où se mélangent des artistes nationaux et internationaux dans une ambiance festive et conviviale.</p>
          </details>
        </div>
        </div>
      </section> */}

      <main className="main_faq">
        <section className="faq_wrapper">
          <h2>Foire Aux Questions</h2>

          <div className="content">
            <h3>Général</h3>
            <div className="details">
              <details open>
                <summary>Qu'est-ce que Les Nuits Secrètes ?</summary>
                <p>
                  Les Nuits Secrètes est un festival de musique et d'arts qui se déroule chaque année dans la ville de Cambrai, en France.
                </p>
                <p>
                  C'est un événement unique où se mélangent des artistes nationaux et internationaux dans une ambiance festive et conviviale.
                </p>
              </details>

              <details>
                <summary>
                  Quand aura lieu la prochaine édition des Nuits Secrètes ?
                </summary>
                <p>
                  La date de la prochaine édition des Nuits Secrètes sera du 15 Juillet au 18 Juillet. Nous vous invitons à consulter régulièrement notre site web et à vous abonner à notre newsletter pour être informé des dernières actualités.
                </p>
              </details>

              <details>
                <summary>
                  Comment puis-je obtenir des billets pour le festival ?
                </summary>
                <p>
                  Vous pouvez acheter des billets pour Les Nuits Secrètes sur notre site web officiel. Les informations sur les ventes de billets seront communiquées au fur et à mesure de l'approche de la prochaine édition du festival.
                </p>
                <p>
                  Restez à l'affût des annonces pour ne pas manquer votre chance d'assister à cet événement exceptionnel.
                </p>
              </details>

              <details>
                <summary>Y a-t-il un camping sur le site du festival ?</summary>
                <p>
                  Oui, un camping est généralement proposé aux festivaliers pendant Les Nuits Secrètes.
                </p>
                <p>
                  C'est une excellente option pour profiter pleinement de l'expérience du festival. Des informations détaillées sur le
                  camping seront disponibles sur notre site web lorsque les billets seront mis en vente.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
