import aust from "../../assets/images/aust-map.png";
import china from "../../assets/images/china-map.svg";
import us from "../../assets/images/US-Map.svg";
import canada from "../../assets/images/Canada-map.svg";
import iceland from "../../assets/images/Iceland-map.svg";
import netherlands from "../../assets/images/netherlands-map.svg";
import finland from "../../assets/images/finland-map.png";
import saudi from "../../assets/images/saudi.svg";
import global_atlas from "../../assets/images/global_atlas.jpg";
import global_geochemistry  from "../../assets/images/World_map.png";

function DigitalData() {
  const countries = [
    {
      src: aust,
      country: "Australia",
      link: "https://ecat.ga.gov.au/geonetwork/srv/eng/catalog.search#/metadata/65464",
    },
    {
      src: china,
      country: "China",
      link: "http://dcc.ngac.org.cn/geologicalData/en/geologicalData/details/doi/10.23650/data.G.2018.NGA122099.K1.1.1.V1;jsessionid=B9644695E92CD56730FFFB47DBF6F3C1",
    },
    {
      src: us,
      country: "Great Basin, USA",
      link: "https://nbmg.unr.edu/geothermal/GeochemDatabase.html",
    },
    {
      src: canada,
      country: "Canada",
      link: "https://geoatlas.gov.nl.ca/Default.htm",
    },
    {
      src: iceland,
      country: "Iceland",
      link: "https://zenodo.org/records/7924330",
    },
    {
      src: netherlands,
      country: "Netherlands",
      link: "https://igiltd.com/data/netherlands/netherlands#:~:text=The%20Netherlands%20Geochemical%20Database%20comprises,also%20having%20additional%20pyrolysis%20data.",
    },
    {
      src: finland,
      country: "Finland",
      link: "https://www.arcgis.com/home/item.html?id=d143be14ebd34f48b585debd36c8aa80",
    },
    {
      src: saudi,
      country: "Saudi Arabia",
      link: "https://ngdp.sgs.gov.sa/ngp/",
    },
    {
      src: global_atlas,
      country: "Global Geothermal Atlas",
      link: "https://globalatlas.irena.org/workspace?_gl=1*qki9xd*_ga*MjQ4NjY4NTY0LjE3MjA4Njc2MjU.*_ga_7W6ZEF19K4*MTcyNTcwOTQ3Mi4zLjAuMTcyNTcwOTQ3Mi42MC4wLjA.",
    },
    {
      src: global_geochemistry,
      country: "Global Geochemistry Data",
      link: "https://www.auscope.org.au/ausgeochem",
    },
  ];

  return (
    <>
      <div className="digital-data container py-5">
        <p className="fs-5">
          Geothermal energy is a sustainable and renewable resource harnessed
          from the Earth's internal heat. As global energy demands continue to
          grow, the exploration of deep geothermal resources becomes
          increasingly vital. Subsurface knowledge is critical for the
          successful development of geothermal energy projects, and many
          countries are recognizing the importance of subsurface data in
          geothermal exploration. Click below for digital data repositories by
          country.
        </p>
        <div className="text-center">
          <h1 className="mt-4">Digital Data By Country</h1>
          <p className="mt-3">
            Get country-specific insights about audiences around the world
          </p>
        </div>
        <div className="row py-3 gx-4">
          {countries.map(({ src, country, link }) => (
            <div className="col-md-3 col-6 mb-4" key={country}>
              <a
                target="_blank"
                href={link}
                className="text-decoration-none text-dark"
              >
                <div className="country-card w-100 py-4">
                  <img
                    src={src}
                    className="w-100"
                    alt={`${country} Digital Data`}
                  />
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
