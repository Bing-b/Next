import MobileScreen from "./MobileScreen";
import CardSlider from "./cardSlider";
import HomeBanner from "./home";
import ImageSec from "./imageSec";
import { Texts } from "./text";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <ImageSec />
      <Texts />
      <CardSlider />
      <MobileScreen />
    </main>
  );
}
