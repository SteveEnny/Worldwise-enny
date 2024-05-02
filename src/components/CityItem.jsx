import styles from "./CityItem.module.css";
function CityItem({ city }) {
  const { cityName, emoji } = city;
  function handleDelete() {}
  console.log(city);
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      {/* <time className={styles.date}>{formatDate(date)}</time> */}
      <button className={styles.deleteBtn} onClick={handleDelete}>
        &times;
      </button>
    </li>
  );
}

export default CityItem;
