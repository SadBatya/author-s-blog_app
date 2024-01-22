import { H2 } from './index'

export default function UsersContent({ children, error }) {
  return (
    error ? 
    (<div>
      <H2>Ошибка</H2>
      <div>{error}</div>
    </div>)
    : 
    (children)
  )  
}
