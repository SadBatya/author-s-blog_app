export default function Icon({ id, parameters, onClick }) {
  return (
    <i className={`fa ${id} ${parameters} cursor-pointer`} aria-hidden="true" onClick={onClick}></i>
  )
}

