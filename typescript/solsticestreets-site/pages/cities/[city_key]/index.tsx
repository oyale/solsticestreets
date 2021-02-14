import { geoJSON } from "leaflet";
import CityMap from "../../../components/CityMap";

import { promises as fs } from "fs";
import path from "path";

import type { City, CityList } from "../../../components/City";
import type { GeoJSON } from "geojson";

async function loadCities() {
  const citiesConfig = path.join(process.cwd(), "public/cities.json");
  const cities: CityList = JSON.parse(await fs.readFile(citiesConfig, "utf8"));
  return cities;
}

export async function getStaticProps({ params }) {
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  const jsonPath = path.join(process.cwd(), "cities");
  const streets = JSON.parse(
    await fs.readFile(`${jsonPath}/${params.city_key}.geojson`, "utf8")
  );
  const stats: GeoJSON = JSON.parse(
    await fs.readFile(`${jsonPath}/${params.city_key}.stats.json`, "utf8")
  );

  const info = (await loadCities()).find((c) => c.key === params.city_key);
  //console.info(info);
  return {
    props: {
      info: info,
      streets: streets,
      stats: stats,
    },
  };
}

export async function getStaticPaths() {
  const cities = await loadCities();
  const paths = cities.map((c) => {
    return {
      params: {
        city_key: c.key,
      },
    };
  });
  return {
    paths: paths,
    fallback: false, // See the "fallback" section below
  };
}

export default function CityPage(props: {
  info: City;
  streets: GeoJSON;
  stats: any;
}) {
  return <p>Hello, {props.info.key}</p>;
}
