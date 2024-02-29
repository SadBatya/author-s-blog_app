import { useRef } from 'react';
import { Input, SpecialPanel } from '../components'
import { sanitizeContent } from '../bff/utils';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePostAsync } from '../store/actions';
import { useServerRequest } from '../hooks';

export default function PostForm({
  post: { id, title, imageUrl, content, publishedAt },
}) {
  const contentRef = useRef(null)
  const titleRef = useRef(null)
  const imageRef = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const requestServer = useServerRequest()
  
  const onSave = () => {
    const newContentUrl = sanitizeContent(contentRef.current.innerHTML) 
    const newTitle = titleRef.current.value
    const newImage = imageRef.current.value

    dispatch(savePostAsync(requestServer,{ id, imageUrl: newImage, title: newTitle, content: newContentUrl })).then(() => {
      navigate(`/post/${id}`)
    })
  }
  return (
    <div
      key={id}
      className='flex flex-col'
    >
      <Input ref={imageRef} defaultValue={imageUrl} placeholder={'Изображение...'}/>
      <Input ref={titleRef} defaultValue={title} placeholder={'Заголовок...'}/>
      <div className='flex flex-col text-left mb-2'>
        <SpecialPanel onClick={onSave} publishedAt={publishedAt} button={'fa-save'}/>
        <div ref={contentRef} contentEditable={true} suppressContentEditableWarning={true} className='text-gray-800'>{content}</div>
      </div>
    </div>
  );
}
