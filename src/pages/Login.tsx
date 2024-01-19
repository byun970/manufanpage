import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginWrapper}>
      <form action="POST" className={styles.login}>
        <h2>Login</h2>
        <div className={styles.loginInput}>
          <label htmlFor="id">아이디</label>
          <input type="text" name="id" />
          <label htmlFor="password">비밀번호</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Login</button>
        <span>아이디가 없으신가요?</span>
        <Link to="/register">회원가입</Link>
      </form>
    </div>
  );
};

export default Login;
