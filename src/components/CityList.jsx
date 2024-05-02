import styles from "./CityList.module.css";
import CityItem from "./CityItem";

function CityList({ cities }) {
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} />
      ))}
    </ul>
  );
}

export default CityList;
