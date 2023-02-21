import React from 'react';
import styles from './header.module.css';

type PropsType = {
  isClicked: boolean
  toggleIsClicked: (value: boolean) => void
}

export function Header({isClicked, toggleIsClicked}: PropsType) {


  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        People
      </h1>
  
      <button
        className={styles.btn}
        onClick={() => toggleIsClicked(isClicked ? false : true)}>
        {isClicked
          ? 'All people'
          : 'Only liked'}
      </button>
    </header>
  );
}
