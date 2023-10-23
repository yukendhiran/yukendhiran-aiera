import Image from "next/image";
import Blob from "./component/blob/blob";
export default function Home() {
  return (
    <div>
      <div class="headline-container">
        <div id="text-behind">AIERA ADVERT</div>
        <div id="text-behind-blur">AIERA ADVERT</div>
        <div id="text-front">AIERA ADVERT</div>
      </div>
      <div class="canvas-container">
        <Blob id="canvas"></Blob>
      </div>
    </div>
  );
}
