import { useState } from "react"
import ProgressBar from "./component/ProgressBar"

export default function App() {
  const [progress,setProgress]=useState(0);
  const handleProgress = () => {
    setProgress((x) => Math.min(100, x + 10));
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center ">

    <ProgressBar progress={progress} />
    <button className="font-bold text-lg bg-blue-400 hover:bg-blue-500 rounded-3xl p-3 mt-4" onClick={handleProgress}>Increase Progress</button>

      </div>
    
    </div>
  )
}