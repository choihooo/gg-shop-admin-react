import React from "react";
import styles from "./CirclePagination.module.css";

function CirclePagination() {
  return (
    <div className={styles.pagination}>
      <button className={styles.paginationButton} aria-label="Previous">
        &lt;
      </button>

      <button className={`${styles.paginationNumber} ${styles.active}`}>
        1
      </button>
      <button className={styles.paginationNumber}>2</button>
      <button className={styles.paginationNumber}>3</button>
      <button className={styles.paginationNumber}>4</button>
      <button className={styles.paginationNumber}>5</button>
      <span className={styles.paginationEllipsis}>...</span>
      <button className={styles.paginationNumber}>67</button>

      <button className={styles.paginationButton} aria-label="Next">
        &gt;
      </button>
    </div>
  );
}

export default CirclePagination;
