"use client";

import React, { useLayoutEffect } from "react";
import { Stack } from "@mui/material";
import gsap from "gsap";
import "../styles/images.css";

const Images = () => {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".scroll-up",
      {},
      {
        transform: "translateY(40px)",
        scrollTrigger: {
          trigger: ".scroll-up",
          start: "top 50%",
          end: "top top",
          scrub: 1,
          toggleActions: "play play reverse reverse",
        },
      }
    );

    gsap.fromTo(
      ".scroll-down",
      {},
      {
        transform: "translateY(-40px)",
        scrollTrigger: {
          trigger: ".scroll-down",
          start: "top 50%",
          end: "top top",
          scrub: 1,
          toggleActions: "play play reverse reverse",
        },
      }
    );
  }, []);

  return (
    <section className="images_containter">
      <div className="images_head">
        <div className="images_title">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-[3px]"
          >
            <path
              d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z"
              fill="#A594FD"
            ></path>
          </svg>
          <h1 className="images_blocks">Introducing Blocks</h1>
        </div>

        <div className="images_subtitle">
          <h1>
            A new, easy <br />
            way to create.
          </h1>
        </div>
      </div>
      <div className="cardscrollup">
        <Stack direction={"row"} justifyContent={"space-between"} gap={"14px"}>
          <div className="scroll-up">
            <div className="roundedcards" style={{ height: "230px" }} />
            <div className="roundedcards" style={{ height: "397px" }} />
          </div>
          <div className="scroll-down" style={{ marginTop: "100px" }}>
            <div className="roundedcards" style={{ height: "397px" }} />
            <div className="roundedcards" style={{ height: "67px" }} />
          </div>
          <div className="scroll-up" style={{ marginTop: "300px" }}>
            <div className="roundedcards" style={{ height: "250px" }} />
          </div>
          <div className="scroll-down" style={{ marginTop: "0px" }}>
            <div className="roundedcards" style={{ height: "67px" }} />
            <div className="roundedcards" style={{ height: "250px" }} />
          </div>
          <div className="scroll-up" style={{ marginTop: "93px" }}>
            <div className="roundedcards" style={{ height: "397px" }} />
          </div>
          <div className="scroll-down">
            <div className="roundedcards" style={{ height: "397px" }} />
          </div>
        </Stack>
      </div>
    </section>
  );
};

export default Images;
