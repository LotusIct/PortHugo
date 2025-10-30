import React from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Themes from "../components/Themes";
import FAQ from "../components/FAQ";

function DireitoPage({ area, bannerImage, services, themes, faqs }) {
  return (
    <div className="direito-page">
      <Banner title={area} image={bannerImage} />
      <Services services={services} />
      <Themes themes={themes} />
      <FAQ faqs={faqs} />
    </div>
  );
}

export default DireitoPage;
