import { useState } from 'react';
import { Icon } from '../components';
import CommentBox from './CommentBox';

export default function Comments({ comments }) {
  const [newComment, setNewComment] = useState('');

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
          onClick={() => onNewCommentAd(postId)}
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
