import Icon from "./Icon"

export default function CommentBox({ publishedAt, time, id, author, content }) {

  return (
    <div className="flex gap-2 mb-2 justify-center">
      <div className="w-1/2 border border-md p-2">
        <div className="flex justify-between items-center "> 
          <div className="flex items-center gap-2">
            <Icon id={'fa-user'} parameters={'text-lg'}/>
            <span>{author}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Icon id={'fa-calendar'} parameters={'text-lg'}/>
            <span>{publishedAt}</span>
            <span>{time}</span>
          </div>
        </div>
        <p className="text-left p-2">{content}</p>
      </div>
      <button className="self-start">
        <Icon id={'fa-trash'} parameters={'text-lg'}/>
      </button>
    </div>
  )
}
