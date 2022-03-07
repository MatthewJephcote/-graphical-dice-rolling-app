import { useState } from "react";
import { DynamicFaceSpot } from './face-detail/dynamic-face-spot';
import { FaceBlank } from './face-detail/face-blank';

export const DynamicDieFace = () => {
  const [rolledNumber, setRolledNumber] = useState (Math.ceil(Math.random() * 6));
    const roll = () => {
      return (
        setRolledNumber(Math.ceil(Math.random() * 6))
      );
    };

  return (
    <div className="die-face flex flex-wrap gap-5 w-96 h-96 p-7 bg-black rounded-3xl m-auto xl:hover:bg-gray-700 xl:active:bg-gray-800 cursor-grab"
      onClick={roll}>
      <DynamicFaceSpot
        styles={rolledNumber === 6 || rolledNumber === 5 || rolledNumber === 4 || rolledNumber === 3 ? "w-24 h-24 bg-white rounded-full" : "w-24 h-24"} />
      <FaceBlank />
      <DynamicFaceSpot
        styles={rolledNumber === 6 || rolledNumber === 5 || rolledNumber === 4 || rolledNumber === 2 ? "w-24 h-24 bg-white rounded-full" : "w-24 h-24"} />
      <DynamicFaceSpot
        styles={rolledNumber === 6 ? "w-24 h-24 bg-white rounded-full" : "w-24 h-24"} />
      <DynamicFaceSpot
        styles={(rolledNumber === 5 || rolledNumber === 3 || rolledNumber === 1) ? "w-24 h-24 bg-white rounded-full" : "w-24 h-24"} />
      <DynamicFaceSpot
        styles={rolledNumber === 6 ? "w-24 h-24 bg-white rounded-full" : "w-24 h-24"} />
      <DynamicFaceSpot
        styles={rolledNumber === 6 || rolledNumber === 5 || rolledNumber === 4 || rolledNumber === 2 ? "w-24 h-24 bg-white rounded-full" : "w-24 h-24"} />
      <FaceBlank />
      <DynamicFaceSpot
        styles={rolledNumber === 6 || rolledNumber === 5 || rolledNumber === 4 || rolledNumber === 3 ? "w-24 h-24 bg-white rounded-full" : "w-24 h-24"} />
    </div>
  );
}
