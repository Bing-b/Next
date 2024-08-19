import React, { ReactElement, useEffect, useState } from "react";
import "./index.css";

import Image from "next/image";

interface imageCarouselListItemType {
  index: number;
  name: String;
  SvgComponent: string;
  color: string;
  image: any;
}

const ItemList: imageCarouselListItemType[] = [
  {
    index: 0,
    name: "Cards",
    SvgComponent: "/hero-tab-1.svg",
    color: "#409fd4",
    image: "/slide1.png",
  },
  {
    index: 1,
    name: "Numbers",
    SvgComponent: "/hero-tab-2.svg",
    color: "#5940d4",
    image: "/slide2.png",
  },
  {
    index: 2,
    name: "Trends",
    SvgComponent: "/hero-tab-3.svg",
    color: "#e2a11d",
    image: "/slide3.png",
  },
  {
    index: 3,
    name: "People",
    SvgComponent: "/hero-tab-4.svg",
    color: "#40b65b",
    image: "/slide4.png",
  },
  {
    index: 4,
    name: "Embeds",
    SvgComponent: "/hero-tab-5.svg",
    color: "#b640d4",
    image: "/slide5.png",
  },
  {
    index: 5,
    name: "Timeline",
    SvgComponent: "/hero-tab-6.svg",
    color: "#40c2d4",
    image: "/slide6.png",
  },
  {
    index: 6,
    name: "More",
    SvgComponent: "/hero-tab-1.svg",
    color: "#000000",
    image: "/slide1.png",
  },
];

function ImageCarouselSearchBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="imageCarouselarea">
      <div className="searchbar">
        <Image
          src="/searchbar.png"
          alt="Vercel Logo"
          height={45}
          width={496}
          className="searchbarImage"
          priority
        />

        <div className="forwardSlash">/</div>
        <div className="searchbarMessage">Type "/" for shortcutsdd</div>

        <Image
          src="/sara-cursor.png"
          alt="Vercel Logo"
          height={40}
          width={65}
          className="saracursor"
          priority
        />
      </div>
      <div className="imageCarousel">
        <div className="imageCarouselListParent">
          <div className="imageCarouselListTitle">
            <Image
              src="/image-carousel-blocks-title.png"
              alt="Vercel Logo"
              height={80}
              width={20}
              className="imageCarouselBlocksTitle"
              priority
            />
          </div>
          <div className="imageCarouselList">
            <ul className="imageCarouselListMid">
              {ItemList.map((item, index) => (
                <li
                  key={index}
                  className={`imageCarouselListItem ${
                    item.index === activeIndex ? "background" : ""
                  }`}
                  onClick={() => setActiveIndex(item.index)}
                >
                  <div
                    className="imageCarouselListItemCover"
                    style={{
                      backgroundColor:
                        item.index === activeIndex ? item.color : "",
                      borderColor: item.index === activeIndex ? item.color : "",
                    }}
                  >
                    <div className="heroSvgDiv">
                      <Image
                        src={item.SvgComponent}
                        alt="Vercel Logo"
                        height={80}
                        width={20}
                        priority
                      />
                    </div>
                  </div>
                  <div className="imageCarouselListItemText">
                    <p>{item.name}</p>
                  </div>
                  <div className="imageCarouselListItemArrow">
                    <Image
                      src="/arrow.png"
                      alt="Vercel Logo"
                      height={80}
                      width={20}
                      priority
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="imageCarouselSlideParent">
          {ItemList.map((item, index) => (
            <img
              className={`imageCarouselSlide ${
                item.index === activeIndex ? "slideActive" : ""
              }`}
              src={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCarouselSearchBar;
