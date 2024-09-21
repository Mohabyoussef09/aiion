
function DeveloperBio() {
  return (
    <>
      {/* <div className="developer-bio container mt-5 p-5">
        <h2 className="bio-title">
          Developer Bio
        </h2>
        <p className="bio-text">
          Mahmoud AlGaiar is a Senior Well Engineer in the Kingdom of Saudi
          Arabia with over 19 years of experience in the oil and gas industry.
          He specializes in the design and execution of oil and gas wells and
          has worked in North and West Africa, South America, and Asia. His
          skills include well engineering, conventional and directional
          drilling, coring, downhole tools, turnkey project management, and
          business development. Mahmoud holds a BSc and PGDip in Mechanical
          Engineering, an MBA in Finance and Budgeting, and an MSc in Drilling
          and Well Engineering. He is currently a PhD student at Robert Gordon
          University, Aberdeen, UK, specializing in geothermal resource
          exploration and evaluation. He is a member of the Energy Institute,
          Geothermal Rising, and the Society of Petroleum Engineers.
        </p>
      </div> */}


<div className="developer-bio container mt-5 p-5">
  <h2 className="bio-title">Developer Bio</h2>
  <p className="bio-text">
    <strong>Mahmoud AlGaiar</strong> is a Senior Well Engineer in the Kingdom of Saudi Arabia with 
    over <span className="highlight">19 years</span> of experience in the oil and gas industry. He specializes in the design 
    and execution of oil and gas wells and has worked in <span className="highlight">North and West Africa, South America,</span> and <span className="highlight">Asia</span>.
  </p>
  <p className="bio-text">
    His skills include well engineering, conventional and directional drilling, coring, downhole tools, 
    turnkey project management, and business development.
  </p>
  <p className="bio-text">
    Mahmoud holds a <span className="degree">BSc</span> and <span className="degree">PGDip</span> in Mechanical Engineering, an <span className="degree">MBA</span> in Finance and Budgeting, and an <span className="degree">MSc</span> in Drilling and Well Engineering. He is currently pursuing a <strong>PhD</strong> at Robert Gordon University, Aberdeen, UK, specializing in geothermal resource exploration and evaluation. He is a member of the Energy Institute, Geothermal Rising, and the Society of Petroleum Engineers.
  </p>
</div>

    </>
  );
}

export default DeveloperBio;
