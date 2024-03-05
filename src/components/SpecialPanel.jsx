import Icon from "./Icon";
import { useDispatch } from 'react-redux'
import { openModal, removePostAsync, CLOSE_MODAL } from '../store/actions'
import { useServerRequest } from "../hooks";
import { useNavigate } from 'react-router-dom'

export default function SpecialPanel({ publishedAt, id, button, onClick }) {
  const dispatch = useDispatch()
  const requestServer = useServerRequest()
  const navigate = useNavigate()
  const onPostRemove = (id) => {
    dispatch(
      openModal({
        text: 'Удалить статью',
        onConfirm: () =>{
          dispatch(removePostAsync(requestServer, id)).then(() => {
            navigate('/')
          });
          dispatch(CLOSE_MODAL)
        },
        onCancel: () => dispatch(CLOSE_MODAL)
      })
    );
  };

  return (
    <>
      <div className='flex justify-between my-2'>
        <div className='text-stone-600 flex gap-2 items-center'>
          <Icon
            id={'fa-calendar'}
            parameters={'text-xl'}
          />
          {publishedAt}
        </div>
        <div className='flex gap-2'>
          <Icon
            onClick={onClick}
            id={button}
            parameters={'text-xl'}
          />
          <Icon
            id={'fa-trash'}
            parameters={'text-xl'}
            onClick={() => onPostRemove(id)}
          />
        </div>
      </div>
    </>
  );
}
