import { Icon } from '../components'
export default function Comments() {
  return (
    <>
     <form className='h-10' action=''>
      <input className='p-2 w-2/6' type='text' placeholder='Введите ваш комментарий...' maxLength={150}/>
      <button>
        <Icon id={'fa-paper-plane'} parameters={'text-lg'}/>
      </button>
     </form>
     <div>Comments</div>
    </>
  )
}
