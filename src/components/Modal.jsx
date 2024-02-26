import { useSelector } from 'react-redux';
import Button from './Button';
import H2 from './H2';
import {
  selectModalIsOpen,
  selectModalOnCancel,
  selectModalOnConfirm,
  selectModalText,
} from '../selectors';

export default function Modal({ className }) {
  const isOpen = useSelector(selectModalIsOpen)
  const text = useSelector(selectModalText );
  const onConfirm = useSelector(selectModalOnConfirm);
  const onCancel = useSelector(selectModalOnCancel);

  if(!isOpen) {
    return null
  }


  return (
    <div className='fixed top-0 right-0 left-0 bottom-0'>
      <div className='absolute bg-black w-full h-full opacity-40'></div>
      <div className='flex flex-col justify-center gap-4 h-auto w-80 m-auto relative top-2/4 transform -translate-y-2/4 bg-white border p-5 rounded-md'>
        <H2>Удалить комментарий?</H2>
        <div className='flex justify-center gap-3'>
          <Button onClick={onConfirm} text={'Да'}/>
          <Button onClick={onCancel} text={'Отмена'} />
        </div>
      </div>
    </div>
  );
}
