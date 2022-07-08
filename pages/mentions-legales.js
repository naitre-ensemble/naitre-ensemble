import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

export default function Mentions() {
  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble - Mentions légales</title>
        <meta name="description" content="Naitre ensemble / Mentions légales" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="w-full">
        <div
          className="w-full bg-cover bg-center"
          style={{
            height: "22rem",
            opacity: "0.7",
            "background-image": "url('/img/background_concept.png')",
          }}
        >
          <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-center mt-12 text-white text-4xl font-light tracking-tight sm:text-5xl lg:text-left">
                Mentions légales
              </h1>
            </div>
          </div>
        </div>
        <div className="lg:pt-3 p-4 lg:p-6 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <p
            style={{ color: "#aa8073" }}
            className="mt-12 mb-12 text-xl p-4 text-justify lg:text-justify lg:p-0 font-extralight"
          >
            En conformité avec la loi n° 2004-575 du 21 juin 2004 pour la
            confiance dans l’économie numérique, il est précisé aux utilisateurs
            du site internet www.naitreensemble.fr l’identité des différents
            intervenants dans le cadre de sa réalisation et de son suivi :
            Propriétaire du site : Leslie RICHARD Siège social : 81 cité
            grammont 59128 flers en escrebieux Contact : 06 44 76 55 88 ou via
            le formulaire de contact Directeur de publication : Leslie RICHARD
            Créateur/webmaster : Nicolas Hedoire www.nicolashedoire.com
            Hébergeur : OVH sas Siège social : 2 rue Kellermann - 59100 Roubaix
            - France Contact : http://www.ovh.com Le présent site est la
            propriété de Leslie RICHARD utilisant la notion Naître Ensemble™
            comme nom de marque. 1. CONDITIONS D&apos;UTILISATION DU SITE Naître
            Ensemble ™ fournit ses services sous réserve de l&apos;engagement de
            l&apos;utilisateur à respecter les présentes conditions d&apos;utilisation que
            Leslie RICHARD sera libre de modifier à tout moment. 2. PROPRIÉTÉ
            INTELLECTUELLE En accord avec les lois régissant la propriété
            intellectuelle, la reproduction ou l&apos;utilisation des éléments se
            trouvant sur le site internet www.naitreensemble.fr, en totalité ou
            en partie, est strictement interdite. Seules sont maintenues les
            exceptions légales dont notamment la représentation dans le cadre du
            cercle de famille, la copie privée ou le droit de courte citation.
            Ainsi, tous les textes, photos, logos, marques et autres éléments
            reproduits sur ce site sont réservés et protégés par le droit de la
            propriété intellectuelle. (Droit d&apos;auteur et droit des marques).
            Toute représentation totale ou partielle de ce site par quelque
            procédé que ce soit, sans l&apos;autorisation expresse et préalable de
            Leslie RICHARD est interdite et constituerait une contrefaçon
            sanctionnée par les articles L 335-2 et suivants du Code de la
            propriété intellectuelle. 3. DONNÉES PERSONNELLES Naître Ensemble™
            s&apos;engage à maintenir confidentielles les données personnelles
            fournies par l&apos;utilisateur du site et à ne pas les transférer à
            d&apos;autres sociétés ou organismes. Naître Ensemble™ s&apos;engage à assurer
            à toute personne qui en fera la demande un droit d&apos;accès, de
            rectification et de suppression des données la concernant. Toutes
            les informations légales concernant les données personnelles sont
            disponibles dans la Charte de Confidentialité. 4. RESPONSABILITÉ
            Naître Ensemble™ décline toute responsabilité pour les difficultés
            rencontrées lors de l&apos;accès à son site ou pour toute défaillance de
            communication. Naître Ensemble™ se réserve la possibilité de
            modifier, d&apos;interrompre temporairement ou de façon permanente, toute
            ou une partie du site, sans préavis. Naître Ensemble ™ ne pourra en
            aucun cas être tenu pour responsable à votre encontre ou à
            l&apos;encontre d&apos;un tiers de toute modification, interruption ou
            suspension du site. L&apos;utilisateur est invité à remplir le formulaire
            de contact pour toute remarque propre au contenu ou au
            fonctionnement du site. 5. LIENS HYPERTEXTES L&apos;utilisateur est libre
            d&apos;établir des liens vers le site et le blog www.naitreensemble.fr
            dans la mesure où ils ne portent pas atteinte à l&apos;image de son
            éditeur. Naître Ensemble ™ n&apos;est en aucun cas responsable du contenu
            et de la disponibilité des sites Internet accessibles à travers son
            site web. 6. INFORMATION CLIENTÈLE En cas d&apos;annulation ou de report
            de rendez-vous, Leslie RICHARD invite sa clientèle à l&apos;en informer
            par téléphone au 06 44 76 55 88 ou par mail via le formulaire de
            contact au minimum 48 heures à l&apos;avance. Toute séance annulée moins
            de 48 heures à l&apos;avance devra être payée dans son intégralité ou
            annulera la validité du bon cadeau. À partir de la date d&apos;achat, les
            bons cadeaux Naître Ensemble™ sont valable 12 mois. 7. SOINS
            "BIEN-ÊTRE" Leslie RICHARD invite sa clientèle à s&apos;assurer auprès de
            leur médecin, gynécologue ou sage-femme que les soins "bien-être"
            sont adaptés à leur condition pré-natal ou post-natal. Merci de bien
            vouloir me confirmer que votre état de santé vous permet de
            bénéficier de mes prestations avant notre rendez-vous. Toutes les
            prestations sont à but non thérapeutiques sans exception. Ils n&apos;ont
            aucune visée thérapeutique, médicale ou sensuelle. 8. POSTURE
            ÉTHIQUE ET NON MÉDICALE DE DOULA Naître Ensemble™ est signataire de
            la charte Doula de france : https://doulas.info/association/charte/
            Les accompagnements de doula de Leslie RICHARD respectent une
            posture éthique, non médicale, amie des sages femmes. Naître
            Ensemble™ ne propose pas de préparation psychoprophylactique à
            l&apos;accouchement. Leslie RICHARD invite sa clientèle de s&apos;assurer un
            suivi médical auprès de leur médecin, gynécologue ou sage-femme.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
