import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '../components';
import { selectUserId } from '../selectors';
import CommentBox from './CommentBox';
import { useServerRequest } from '../hooks';
import { addCommentAsync } from '../store/actions';

export default function Comments({ comments, postId }) {
  const [newComment, setNewComment] = useState('');
  const dispatch = useDispatch()

  const userId = useSelector(selectUserId)

  const onNewCommentAd = (userId, postId, content) => {
    dispatch(addCommentAsync(userId, postId, content, requestServer))
  }

  const requestServer = useServerRequest()

  return (
    <>
      <form
        className='flex gap-2 justify-center'
        action=''
      >
        <textarea
          className='p-2 w-1/2 border mb-2'
          value={newComment}
          onChange={({target}) => setNewComment(target.value)}
          name='comment'
          cols='30'
          rows='5'
          placeholder='Введите ваш комментарий...'
        ></textarea>
        <Icon
          onClick={() => onNewCommentAd(userId, postId, newComment)}
          id={'fa-paper-plane'}
          parameters={'text-lg'}
        />
      </form>
      {comments.map(({publishedAt, id, author, content}) => (
        <CommentBox key={id} id={id} author={author} content={content} publishedAt={publishedAt}/>
      ))}
      <CommentBox comments={comments} />
    </>
  );
}
