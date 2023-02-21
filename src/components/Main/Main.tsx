import React, { useEffect, useState } from 'react';
import styles from './main.module.css';
import { Card } from './Card';
import { useAppSelector } from '../../store/hooks';

export function Main({ isClicked }: { isClicked: boolean }) {
  const allUsers = useAppSelector(state => state.users.users)
  
  const [users, setUsers] = useState(allUsers)

  useEffect(() => {
    if (isClicked) {
      setUsers(allUsers.filter(user => user.like === true))
    } else setUsers(allUsers)

  }, [isClicked, allUsers])

  

  return (
    <div className={styles.container}>
      {users.map(user => (
        <Card user={user} key={user.id} />
      )
      )}
    </div>
  );
}
