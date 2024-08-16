"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./index.css";
import DragAndDropSubtitle from "@/components/DragAndDropSubtitle";
// import ImageCarouselSearchBar from "@/components/ImageCarouselAndSearchBar";

export default function ProductCard() {
  const [rotation, setRotation] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    // 确保只在客户端执行
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrollValue(window.scrollY);
        console.log(window.scrollY); // 直接使用window.scrollY
      };

      window.addEventListener("scroll", handleScroll);

      // 清理函数，用于移除事件监听器
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // 依赖项数组为空，因为这个副作用不依赖于props或state

  useEffect(() => {
    setRotation(scrollValue / 4);
  }, [scrollValue]);

  return (
    <div className="productCardParent">
      <div
        className="productCard"
        style={{ transform: `rotateX(-${rotation}deg)` }}
      >
        <div className="container">
          <div className="productCardTitlebar">
            <div className="cardWindowOptions">
              <svg
                className="windowOptions windowOption1"
                height="10"
                width="10"
              >
                <circle cx="5" cy="5" r="6" stroke="black" stroke-width="3" />
              </svg>
              <svg
                className="windowOptions windowOption2"
                height="10"
                width="10"
              >
                <circle cx="5" cy="5" r="6" stroke="black" stroke-width="3" />
              </svg>
              <svg
                className="windowOptions windowOption3"
                height="10"
                width="10"
              >
                <circle cx="5" cy="5" r="6" stroke="black" stroke-width="3" />
              </svg>
            </div>
            <div className="heroBtns">
              <button className="heroBtn">
                <Image
                  src="/hero-btn-1.svg"
                  alt="Vercel Logo"
                  width={30}
                  height={30}
                  className="dark:invert"
                  priority
                />
              </button>
              <button className="heroBtn">
                <Image
                  src="/hero-btn-2.svg"
                  alt="Vercel Logo"
                  width={30}
                  height={30}
                  className="dark:invert"
                  priority
                />
              </button>
              <button className="heroBtn">
                <Image
                  src="/hero-btn-3.svg"
                  alt="Vercel Logo"
                  width={30}
                  height={30}
                  className="dark:invert"
                  priority
                />
              </button>
              <button className="heroBtn">
                <Image
                  src="/hero-btn-4.svg"
                  alt="Vercel Logo"
                  width={30}
                  height={30}
                  className="dark:invert"
                  priority
                />
              </button>
            </div>
            <div className="item5"></div>
          </div>
          <div className="productCardMainArea">
            <div className="mainAnimation">
              <div className="mainAnimationContentGrid">
                <div className="mainAnimationText">
                  <a
                    href="https://blog.chroniclehq.com/2023/02/14/chronicle-raises-7-5m-seed-round-from-accel-and-square-peg-to-reimagine-presentations/"
                    className="mainAnimationTextAnnouncement"
                  >
                    ✨ $7.5M seed raised with Accel & Square Peg
                  </a>
                  <div className="mainAnimationTextTitle">
                    <div>Impactful</div>
                    <div>stories. Made</div>
                    <div>effortlessly.</div>
                  </div>
                  <div className="mainAnimationTextSubTitle">
                    <DragAndDropSubtitle />
                  </div>
                </div>
                <div className="mainAnimationImageCarousel">
                  {/* <ImageCarouselSearchBar /> */}
                </div>
              </div>
            </div>
            <div className="sideScreenImages">
              <Image
                src="/hero-screen-1.png"
                alt="Vercel Logo"
                width={100}
                height={100}
                className="dark:invert heroScreenImages"
                priority
              />
              <br />
              <Image
                src="/hero-screen-2.png"
                alt="Vercel Logo"
                width={100}
                height={100}
                className="dark:invert heroScreenImages"
                priority
              />
              <br />
              <button className="heroScreenBtn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
