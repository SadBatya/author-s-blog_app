import H2 from './H2';
import { Icon } from '../components'
export default function PostContent({
  post: { id, title, imageUrl, content, publishedAt },
}) {
  return (
    <div
      key={id}
      className='flex'
    >
      <img
        src={imageUrl}
        alt={title}
        className='flex-none self-start mr-5'
      />
      <div className='flex flex-col text-left mb-2'>
        <H2>{title}</H2>
        <div className='flex justify-between my-2'>
          <div className='text-stone-600 flex gap-2 items-center'>
          <Icon id={'fa-calendar'} parameters={'text-xl'}/>
            {publishedAt}
          </div>
          <div className='flex gap-2'>
            <Icon id={'fa-calendar'} parameters={'text-xl'}/>
            <Icon id={'fa-trash'} parameters={'text-xl'}/>
          </div>
        </div>
        <div className='text-gray-800'>{content}</div>
      </div>
    </div>
  );
}