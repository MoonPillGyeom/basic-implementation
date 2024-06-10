import styles from "./RapTime.module.css";

// timestamp

export default function RapTime({ item, index }) {
  return (
    <>
      <div className={styles.itemFlex}>
        <span className={styles.index}>{index}</span>
        <div>{item}</div>
      </div>
    </>
  );
}
