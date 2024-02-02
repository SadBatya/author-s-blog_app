import { Icon } from '../components'
import CommentBox from './CommentBox'

export default function Comments() {
  return (
    <>
     <form className='flex gap-2 justify-center' action=''>
      <textarea className='p-2 w-1/2 border mb-2' name="comment" cols="30" rows="5" placeholder='Введите ваш комментарий...'></textarea>
        <Icon id={'fa-paper-plane'} parameters={'text-lg'}/>
     </form>
     <CommentBox />
    </>
  )
}
