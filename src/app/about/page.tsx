"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";

import gsap from "gsap";

import "./index.css";

export default function About() {
  // 状态
  // const [likes, setLikes] = useState(0);

  // const list = ["蔚来", "比亚迪", "小鹏", "问界"];

  // // 客户端渲染时更新状态
  // useEffect(() => {
  //   // 可以在这里执行与客户端特有的逻辑
  // }, []);

  // function handleClick() {
  //   setLikes(likes + 1);
  //   console.log("感谢您嘞");
  // }

  useLayoutEffect(() => {
    gsap.to(".green", { rotation: 360, x: 100, duration: 1 });

    gsap.from(".purple", { rotation: -360, x: -100, duration: 1 });

    gsap.fromTo(".blue", { x: -100 }, { rotation: 360, x: 100, duration: 1 });

    var t1 = gsap.timeline();
    t1.to(".box1", { duration: 2, rotation: -360 })
      .to(".box2", { duration: 1, x: -100, ease: "elastic.out" })
      .to(".box3", {
        duration: 2,
        rotation: 360,
        x: 200,
        y: -100,
        sease: "expo.out",
      });
  }, []);

  return (
    <div className="annimate-box">
      {/* <p>关于我页面</p>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <p>好感度{likes}</p>
      <button onClick={handleClick}>like+1</button> */}

      <div className="annimate-box">
        <div className="box gradient-green green"></div>
        <div className="box gradient-purple purple"></div>
        <div className="box gradient-blue blue"></div>
      </div>

      <div className="annimate-box">
        <div className="box box1 green"></div>
        <div className="box box2 orange"></div>
        <div className="box box3 purple"></div>
      </div>
    </div>
  );
}
