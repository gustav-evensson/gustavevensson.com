
export default function SectionNumber({ number } : { number: number | string}) {

  return (
    <span className="text-foreground/5 font-bold -z-[1] text-9xl absolute top-0 left-0 -translate-x-1/2 -translate-y-1/3">
      {number}
    </span>
  )
}