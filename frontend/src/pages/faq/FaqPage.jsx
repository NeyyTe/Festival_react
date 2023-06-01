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
        <div className="tiger"></div>
        <section className="faq_wrapper">
          <h2>Foire Aux Questions</h2>

          <div className="content">
            <div className="details">
              <h3>Général</h3>
              <details open>
                <summary>Qu'est-ce que Les Nuits Secrètes ?</summary>
                <p>
                  Les Nuits Secrètes est <span>un festival de musique et d'arts</span> qui se
                  déroule chaque année dans la ville de <span>Cambrai, en France.</span>
                </p>
                <p>
                  C'est un événement unique où se mélangent des artistes
                  nationaux et internationaux dans une ambiance festive et
                  conviviale.
                </p>
              </details>

              <details>
                <summary>
                  Quand aura lieu la prochaine édition des Nuits Secrètes ?
                </summary>
                <p>
                  La date de la prochaine édition des Nuits Secrètes sera du <span>
                    15
                    Juillet au 18 Juillet </span> .</p>
                 <p>
                   Nous vous invitons à consulter
                    régulièrement notre site web et à vous abonner à notre
                    newsletter pour être informé des dernières actualités.
                 </p>
                
              </details>

              <details>
                <summary>
                  Comment puis-je obtenir des billets pour le festival ?
                </summary>
                <p>
                  Vous pouvez acheter des billets pour Les Nuits Secrètes sur
                  notre site web officiel. Les informations sur les ventes de
                  billets seront communiquées au fur et à mesure de l'approche
                  de la prochaine édition du festival.
                </p>
                <p>
                  Restez à l'affût des annonces pour ne pas manquer votre chance
                  d'assister à cet événement exceptionnel.
                </p>
              </details>

              <details>
                <summary>Y a-t-il un camping sur le site du festival ?</summary>
                <p>
                  Oui, un camping est généralement proposé aux festivaliers
                  pendant Les Nuits Secrètes.
                </p>
                <p>
                  C'est une excellente option pour profiter pleinement de
                  l'expérience du festival. Des informations détaillées sur le
                  camping seront disponibles sur notre site web lorsque les
                  billets seront mis en vente.
                </p>
              </details>

              <h3>Équipements & Installations</h3>
              <details>
                <summary>Casiers</summary>

                <p>
                  Vous désirez un casier afin de protéger vos objets de valeurs?
                  Des casiers sont accessibles à tout moment sur le site du
                  camping.
                </p>
                <p>
                  La location d'un casier coûte<span> 8€</span> pour l'entièreté du week-end.
                </p>
              </details>

              <details>
                <summary>Nourriture & Boissons</summary>
                <p>
                  Vous désirez un petit café avant une longue journée de
                  festival ou encore un rafraîchissement bien mérité?
                </p>
                <p>
                  <span>Des bars</span> seront disponibles sur le site du camping. En cas de
                  fringale, vous trouverez différents <span>food trucks</span> afin de
                  prendre des forces.
                </p>
              </details>

              <details>
                <summary>Supermarché du Camping</summary>
                <p>
                  Vous avez oublié votre brosse à dents à la maison? Vous avez
                  envie d'un bon snack à déguster dans votre tente ? Le
                  supermarché du camping est l'endroit qu'il vous faut !{" "}
                </p>{" "}
                <p>Vous pourrez y trouver les produits suivants :</p>
                <p>
                  <span>Nourriture</span> : chips, snacks (mars, snickers, lion, twix,
                  m&m's), bonbons, chewing gums. Boissons:café, eau
                </p>
                <p>
                  <span>Produits d'hygiène</span> : dentifrice, gel douche, dédorant bille,
                  brosse à dents.
                </p>{" "}
                <p>
                  <span>Petit matériel</span> : gourdes, briquets, chargeur, câble USB /
                  iPhone / Type C. Matériel de camping: matelas 1 personne,
                  matelas 2 personnes.
                </p>
              </details>
              <details>
                <summary>Sanitaires</summary>
                <p>
                  Des douches et toilettes gratuites sont mises à la disposition
                  des campeurs.{" "}
                </p>
                <p>Les douches seront accessibles: </p>

                <p>- Le vendredi 7 juillet : de 18h00 à 00h00</p>
                <p>
                  - Le samedi 8 juillet de 00h00 à 04h00, de 08h00 à 15h00 et de
                  21h00 à 00h00
                </p>
                <p>
                  - Le dimanche 9 juillet de 00h00 à 04h00, de 08h00 à 15h00 et
                  de 21h00 à 00h00{" "}
                </p>
                <p>
                  - Le lundi 10 juillet de 00h00 à 02h00 et de 08h00 à 12h00
                </p>
              </details>
              <details>
                <summary>Recharge téléphone</summary>
                <p>
                  La batterie du téléphone qui tombe à 6%... On a déjà tous eu
                  ce problème.
                </p>
                <p>
                  Pas de souci! Notre camping est équipé d'une station afin de
                  charger vos téléphones portables.
                </p>
              </details>
              <details>
                <summary>Station à Air</summary>
                <p>La flemme de gonfler votre matelas? Un oubli de pompe?</p>
                <p>
                  Vous pouvez gonfler vos matelas au niveau de notre station à
                  air!
                </p>
                <p>
                  Attention, n'oubliez pas de ramener le tuyau permettant de
                  gonfler ce dernier.
                </p>
              </details>
              <h3>Sécurité</h3>
              <details>
                <summary>Objets interdits</summary>
                <p>
                  Chaque campeurs sera soumis à une fouille lors de son entrée
                  sur le site du festival.
                </p>
                <p>
                  Afin d'éviter tout problème mais aussi d'allonger l'attente au
                  niveau de l'entrée campeurs, nous vous demandons de bien
                  consulter la liste suivante.
                </p>
                <p>
                  <span>Sont interdits sur le site du camping :</span>
                </p>
               <p>- tout récipient en verre</p>
               <p>- la détention ou la consommation de boissons alcoolisées à l’exception de celles vendues par l’organisateur du festival. Nous pratiquons la tolérance zéro par rapport aux boissons alcoolisées amenées depuis l'extérieur du festival.</p>
               <p>- les pipes à eau, les chichas, ainsi que la détention ou la consommation de toutes drogues </p>
               <p>- tout type de feux dépassant la taille d’une flamme de briquet (barbecue, bougies, brûleurs et autres installations au gaz, …)</p>
               <p>- tout type d’aérosols (les déodorants en boules sont autorisés)</p>
               <p>- les groupes électrogènes</p>
               <p>- les outils (clés plates, pinces, pelles, etc.) pouvant servir à démonter les grilles. Toute personne tentant d’escalader, d’ouvrir ou d’abîmer les infrastructures, ou d’introduire frauduleusement des objets à l’intérieur du camping, sera immédiatement exclue du camping et du festival</p>
               <p>- les grosses enceintes sont interdites sur le site du camping. Si vous désirez ramener un baffle, choisissez un petit format afin de respecter le sommeil de chacun.</p>
               <p>- les activités commerciales : les campeurs ne sont pas autorisés à vendre de la nourriture, des boissons ou quoi que ce soit d’autre.</p>
               <p>- la distribution de dépliants et autres matériels de promotion</p>
               <p>- les objets coupants et tout autre matériel pouvant nuire à la convivialité du camping (armes blanches, feux d’artifices, pétards, …)</p>
               <p>Les objets précités seront confisqués à l’entrée et l’organisation décline toute responsabilité en cas de non restitution. </p>
               <p>Toute personne surprise sur le terrain de camping en possession d’un des objets interdits précités sera immédiatement exclue du camping et du festival.</p>
               <p>Les contrevenants s’exposent à des poursuites judiciaires si la possession desdits objets est constitutive d’une infraction pénale (arme blanche, drogue,…).</p>
               <p>Des agents de sécurité et des stewards seront en permanence présents à l’entrée et à l’intérieur du camping. N’hésitez pas à leur signaler tout problème.</p>
              </details>
              
              <details>
                <summary>Vols</summary>
                <p>Malgré la présence massive d’agents de sécurité, il est impossible de surveiller les affaires de chaque campeur. Nous vous demandons donc de ne jamais laisser d’objets de valeur dans votre tente ou autre sans surveillance.</p>
                <p>Des casiers sont disponibles sur le site du camping et du festival afin de protéger vos effets personnels.</p>
                <p>L’organisation décline toute responsabilité en cas de vol ou d’éventuelles dégradations.</p>
              </details>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
