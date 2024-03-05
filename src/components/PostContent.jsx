import H2 from './H2';
import { SpecialPanel } from '../components'
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
        <SpecialPanel id={id} publishedAt={publishedAt} button={'fa-trash'}/>
        <div className='text-gray-800'>{content}</div>
      </div>
    </div>
  );
}
