

export default function ScrollAnimation() {
  return (
    <div className="border-[2px] border-foreground rounded-full p-1">
      <div className="w-4 aspect-square rounded-full bg-foreground animate-scroll"></div>
      <div className="w-4 aspect-square"></div>
    </div>
  )
}