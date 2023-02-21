import React, { useState } from 'react';
import styles from './card.module.css';
import { UserType } from '../../../api/api';
import { ReactComponent as NoLikeSVG } from '../../../assets/img/noLike.svg';
import { ReactComponent as LikeSVG } from '../../../assets/img/like.svg';
import { deleteUser, setLikeUser } from '../../../store/reducers/usersSlice';
import { useAppDispatch } from '../../../store/hooks';

type PropsType = {
  user: UserType
}

export function Card({ user }: PropsType) {
  const [isLike, toggleIsLike] = useState(user.like)
  const dispatch = useAppDispatch()

  const setLike = () => {
    dispatch(setLikeUser({ id: user.id }))
    toggleIsLike(isLike ? false : true)
  }

  const deleteCard = () => {
    dispatch(deleteUser({ id: user.id }))
  }

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={user?.avatar} alt="Аватар" />
        <h3 className={styles.name}>
          {user?.first_name + ' ' + user?.last_name}
        </h3>
        <span className={styles.mail}>
          {user.email}
        </span>
        <button
          className={styles.btn}
          onClick={deleteCard}
        >
          Delete
        </button>
        <div
          className={styles.like}
          onClick={() => setLike()}>
          {isLike
            ? <LikeSVG />
            : <NoLikeSVG />
          }
        </div>
      </div>
    </div>
  );
}
