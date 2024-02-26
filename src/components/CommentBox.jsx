import { useDispatch } from 'react-redux';
import Icon from './Icon';
import { CLOSE_MODAL, openModal, removeCommentAsync } from '../store/actions';
import { useServerRequest } from '../hooks';

export default function CommentBox({
  publishedAt,
  time,
  id,
  author,
  content,
  postId,
}) {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();

  const onCommentRemove = (id) => {
    dispatch(
      openModal({
        text: 'Удалить комментарий',
        onConfirm: () =>{
          dispatch(removeCommentAsync(requestServer, postId, id));
          dispatch(CLOSE_MODAL)
        },
        onCancel: () => dispatch(CLOSE_MODAL)
      })
    );
  };

  return (
    <div className='flex gap-2 mb-2 justify-center'>
      <div className='w-1/2 border border-md p-2'>
        <div className='flex justify-between items-center '>
          <div className='flex items-center gap-2'>
            <Icon
              id={'fa-user'}
              parameters={'text-lg'}
            />
            <span>{author}</span>
          </div>
          <div className='flex gap-2 items-center'>
            <Icon
              id={'fa-calendar'}
              parameters={'text-lg'}
            />
            <span>{publishedAt}</span>
            <span>{time}</span>
          </div>
        </div>
        <p className='text-left p-2'>{content}</p>
      </div>
      <button className='self-start'>
        <Icon
          id={'fa-trash'}
          parameters={'text-lg'}
          onClick={() => onCommentRemove(id)} 
        />
      </button>
    </div>
  );
}
