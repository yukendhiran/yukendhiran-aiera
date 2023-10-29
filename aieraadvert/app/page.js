import Image from "next/image";
import Blob from "./component/blob/blob";
export default function Home() {
  return (
    <div>
      <div className="headline-container">
        <div id="text-behind">AIERA </div>
        <div id="text-behind-blur">AIERA </div>
        <div id="text-front">AIERA </div>
      </div>
      <div className="canvas-container">
        <Blob className="w-full h-full"></Blob>
      </div>
    </div>
  );
}
