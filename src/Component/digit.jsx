

// export default function Digit({value , borderColer = "#222222"}) {
//   return (
//     <div  className={`w-15 h-15 rounded-xl border px-6 py-4 flex justify-center border-${[{borderColer}]} items-center gap-2.5`}>

//         <h1 className="font-semibold text-[22px] text-black">{value}</h1>
//     </div>
//   )
// }


export default function Digit({ value, borderColor = "#222222" }) {
  return (
    <div
      className="w-15 h-15 rounded-xl border-2 px-6 py-4 flex justify-center items-center"
      style={{ borderColor }}
    >
      <h1 className="font-semibold text-[22px] text-black">
        {value}
      </h1>
    </div>
  );
}

