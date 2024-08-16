"use client";

import React, { useState, useEffect } from "react";

export default function About() {
  // 状态
  const [likes, setLikes] = useState(0);

  const list = ["蔚来", "比亚迪", "小鹏", "问界"];

  // 客户端渲染时更新状态
  useEffect(() => {
    // 可以在这里执行与客户端特有的逻辑
  }, []);

  function handleClick() {
    setLikes(likes + 1);
    console.log("感谢您嘞");
  }

  return (
    <div>
      <p>关于我页面</p>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <p>好感度{likes}</p>
      <button onClick={handleClick}>like+1</button>
    </div>
  );
}
