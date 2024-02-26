export default function Button({ text, onClick, ...props }) {
  return (
    <button onClick={onClick} className="max-w-md border border-black">{text}</button>
  )
}
