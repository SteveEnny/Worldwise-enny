import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
function CountryList({ cities }) {
  return (
    <ul className={styles.countryList}>
      {cities.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
