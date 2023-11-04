import Image from "next/image";
import Blob from "./component/blob/blob";
import Nav from "./component/nav/nav";
export default function Home() {
  return (
    <div className=""> 

      <Nav/>

     <div className="mt-56">
       <div className="headline-container">
        <div id="text-behind">AIERA </div>
        <div id="text-behind-blur">AIERA </div>
        <div id="text-front">AIERA </div>
      </div>
      <div className="canvas-container">
        <Blob className="w-full h-full"></Blob>
      </div>
     </div>
    </div>
  );
}
