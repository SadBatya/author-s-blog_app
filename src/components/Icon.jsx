export default function Icon({ id, parameters }) {
  return (
    <i className={`fa ${id} ${parameters} cursor-pointer`} aria-hidden="true" ></i>
  )
}

