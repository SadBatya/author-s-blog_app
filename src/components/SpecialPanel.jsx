import Icon from "./Icon";
export default function SpecialPanel({ publishedAt, button, onClick }) {
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
          />
        </div>
      </div>
    </>
  );
}
