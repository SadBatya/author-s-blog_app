export default function Button({ text, ...props }) {
  return (
    <button className="max-w-md border border-black">{text}</button>
  )
}
