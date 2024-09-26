
import aust from "../../assets/images/cdn_image.gif";
import china from "../../assets/images/china-map.gif";
import us from "../../assets/images/US-Map.svg";
import canada from "../../assets/images/Canada-map.svg";
import iceland from "../../assets/images/Iceland-map.svg";
import netherlands from "../../assets/images/netherlands-map.svg";
import finland from "../../assets/images/finland-map.png";
import saudi from "../../assets/images/saudi.svg";

function DigitalData() {

  const countries = [
    { src: aust, country: "Australia", link: "https://ecat.ga.gov.au/geonetwork/srv/eng/catalog.search#/metadata/65464" },
    { src: china, country: "China", link: "http://dcc.ngac.org.cn/geologicalData/en/geologicalData/details/doi/10.23650/data.G.2018.NGA122099.K1.1.1.V1;jsessionid=B9644695E92CD56730FFFB47DBF6F3C1" },
    { src: us, country: "Great Basin, USA", link: "https://nbmg.unr.edu/geothermal/GeochemDatabase.html" },
    { src: canada, country: "Canada", link: "https://geoatlas.gov.nl.ca/Default.htm" },
    { src: iceland, country: "Iceland", link: "https://zenodo.org/records/7924330" },
    { src: netherlands, country: "Netherlands", link: "https://igiltd.com/data/netherlands/netherlands#:~:text=The%20Netherlands%20Geochemical%20Database%20comprises,also%20having%20additional%20pyrolysis%20data." },
    { src: finland, country: "Finland", link: "https://www.arcgis.com/home/item.html?id=d143be14ebd34f48b585debd36c8aa80" },
    { src: saudi, country: "Saudi Arabia", link: "https://ngdp.sgs.gov.sa/ngp/" },
  ];
  
  return (
    <>
<div className="container mt-5 py-4">
  <div className="text-center">
    <h1>Digital Data By Country</h1>
    <p className="fs-6">Get country-specific insights about audiences around the world</p>
  </div>
  <div className="row py-5 gx-4">
    {countries.map(({ src, country, link }) => (
      <div className="col-md-3 col-6 mb-4" key={country}>
        <a
          target="_blank"
          href={link}
          className="text-decoration-none text-dark"
        >
          <div className="country-card w-100 py-4">
            <img src={src} className="w-100" alt={`${country} Digital Data`} />
            <h6 className="text-center mt-3">{country}</h6>
          </div>
        </a>
      </div>
    ))}
  </div>
</div>


    </>
  );
}

export default DigitalData;
