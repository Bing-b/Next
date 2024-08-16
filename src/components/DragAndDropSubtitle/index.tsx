import { useState, useLayoutEffect } from "react";
import "./index.css";
import Image from "next/image";

function DragAndDropSubtitle() {
  useLayoutEffect(() => {
    const dragItem = document.querySelector(".ProductCardSubtitleImage");
    dragItem?.classList.add("animate");
  }, []);

  return (
    <div className="DandDcomponent">
      <Image
        src="/ProductCardSubtitle.png"
        alt="Vercel Logo"
        height={65}
        width={496}
        className="ProductCardSubtitleImage"
        priority
      />
      <Image
        src="/mattycursor.png"
        alt="Vercel Logo"
        width={65}
        height={40}
        className="mattycursor"
        priority
      />
    </div>
  );
}

export default DragAndDropSubtitle;
