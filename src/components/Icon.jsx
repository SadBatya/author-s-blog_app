export default function Icon({ id, parameters }) {
  return (
    <i className={`fa ${id} ${parameters}`} aria-hidden="true" ></i>
  )
}
