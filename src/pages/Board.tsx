import React, { useState } from "react";
import styles from "./Board.module.css";
import data from "../db/data.json";
import { BoardData } from "../data";

const Board = () => {
  const parseData = JSON.parse(JSON.stringify(data));
  const boardDatas = parseData.boardData;
  console.log(boardDatas);
  /* const [title, setTitle] = useState("");
  const [detail, setDetail] = useState(""); */
  const [posts, setPosts] = useState<BoardData[]>(boardDatas);
  const [newPosts, setNewPosts] = useState("");
  const [updateInput, setUpdateInput] = useState(false);

  const addPost = () => {
    if (newPosts.trim() !== "") {
      setPosts((prevPosts) => [
        ...prevPosts,
        {
          id: prevPosts.length + 1,
          title: newPosts,
        },
      ]);
      setNewPosts("");
    }
  };

  const deletePost = (id: number) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  const showUpdatePost = () => {
    setUpdateInput(current => !current);
  };

  return (
    <div className={styles.board}>
      <h1>게시판</h1>
      <div className={styles.boardSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setNewPosts(e.target.value);
          }}
        />
        <button onClick={addPost}>글 입력</button>
      </div>
      {posts.map((post, i) => {
        return (
          <div className={styles.boardList} key={post.id}>
            <h2>{post.title}</h2>
            <div className={styles.buttons}>
              <button onClick={() => showUpdatePost()}>글 수정</button>
              <button onClick={() => deletePost(post.id)}>글 삭제</button>
            </div>
          </div>
        );
      })}
      {updateInput ? (
        <div className={styles.updateInput}>
          <input type="text" />
          <button>수정</button>
        </div>
      ) : null}
    </div>
  );
};

export default Board;
