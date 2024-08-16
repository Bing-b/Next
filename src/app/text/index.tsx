"use client";

import React, { useEffect } from "react";
import "../styles/text.css";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

export const Texts = () => {
  const text =
    "In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold";

  const lenis = new Lenis();

  lenis.on("scroll", (e) => {});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((word) => {
      const text2 = new SplitType(word, { types: "words" });

      gsap.from(text2.words, {
        scrollTrigger: {
          trigger: word,
          start: "top 60%",
          end: "bottom 50%",
          scrub: true,
          toggleActions: "play play reverse reverse",
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });
  }, []);

  return (
    <div className="textbox_container">
      <p className="reveal-type">{text}</p>
    </div>
  );
};

export default Text;
