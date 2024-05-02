import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

function AppLayout({ cities }) {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map cities={cities} />
    </div>
  );
}

export default AppLayout;
