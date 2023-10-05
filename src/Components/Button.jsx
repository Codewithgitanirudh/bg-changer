import { useState } from 'react'
const Button = () => {
    const [color, setColor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-300" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center top-10 inset-x-0 px-3">
          <div className="flex flex-wrap justify-center gap-4 bg-transparent px-3 py-1 rounded-xl">
          <button onClick={() => setColor("olive")} className="outline-none px-4 py-2 text-white rounded-lg" style={{backgroundColor:"olive"}}>olive</button>
            <button onClick={() => setColor("blue")}  className="outline-none px-4 py-2 text-white rounded-lg" style={{backgroundColor:"blue"}}>blue</button>
            <button onClick={() => setColor("red")} className="outline-none px-4 py-2 text-white rounded-lg" style={{backgroundColor:"red"}}>red</button>
            <button onClick={() => setColor("yellow")} className="outline-none px-2 py-2 text-black rounded-lg" style={{backgroundColor:"yellow"}}>yellow</button>
            <button onClick={() => setColor("black")} className="outline-none px-4 py-2 text-white rounded-lg" style={{backgroundColor:"black"}}>black</button>
            <button onClick={() => setColor("grey")} className="outline-none px-4 py-2 text-white rounded-lg" style={{backgroundColor:"grey"}}>grey</button>
            <button onClick={() => setColor("pink")} className="outline-none px-4 py-2 text-white rounded-lg" style={{backgroundColor:"pink"}}>pink</button>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Button