"use client";

import { useRef } from "react";
import "../styles/mobilescreen.css";
import { gsap } from "gsap";

const MobileScreen = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const cardBounds = card.getBoundingClientRect();
    const cardCenterX = cardBounds.left + cardBounds.width / 2;
    const cardCenterY = cardBounds.top + cardBounds.height / 2;

    const cursorX = e.clientX;
    const cursorY = e.clientY;

    const xOffset = (cursorX - cardCenterX) / 10;
    const yOffset = (cursorY - cardCenterY) / 10;

    const maxXRotation = Math.min(10, Math.max(-10, xOffset));
    const maxYRotation = Math.min(3, Math.max(-2, yOffset));

    gsap.to(card, {
      rotationX: -maxYRotation,
      rotationY: maxXRotation,
      duration: 0.3,
      transformOrigin: "center center",
      transition: "all 0.2s linear 0s",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.3,
      transformOrigin: "center center",
      transition: "all 0.2s linear 0s",
    });
  };

  return (
    <section className="mobilescreen_container">
      <div className="mobilescreen-card">
        <div className="mobilescreen-title">
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
          Mobile experience
        </div>
        <div className="mobilescreen-heading">Present anywhere. Anytime.</div>
        <div className="mobilescreen-content">
          Transform your stories into a bite-sized format tailored for mobile.
          Quickly browse the summary and dive deeper when needed.
        </div>
      </div>
      <div
        className="card-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="mobilescreen1"
          ref={cardRef}
          style={{
            transform: "rotate(-18deg) translateX(80px) translateY(60px)",
          }}
        />
      </div>
    </section>
  );
};

export default MobileScreen;
