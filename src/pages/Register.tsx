import React from 'react';
import styles from './Register.module.css';

const Register = () => {
  return (
    <div className={styles.registerWrapper}>
      <form action="POST" className={styles.register}>
        <h2>회원가입</h2>
        <div className={styles.registerInput}>
          <label htmlFor="id">아이디</label>
          <input type="text" name="id" />
          <label htmlFor="password">비밀번호</label>
          <input type="password" name="password" />
          <label htmlFor="name">이름</label>
          <input type="text" name="name" />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  )
}

export default Register