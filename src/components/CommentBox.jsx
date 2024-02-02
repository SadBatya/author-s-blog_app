import Icon from "./Icon"

export default function CommentBox() {
  return (
    <div className="flex gap-2 mb-2 justify-center">
      <div className="w-1/2 border border-md p-2">
        <div className="flex justify-between items-center "> 
          <div className="flex items-center gap-2">
            <Icon id={'fa-user'} parameters={'text-lg'}/>
            <span>Vladimir</span>
          </div>
          <div className="flex gap-2 items-center">
            <Icon id={'fa-calendar'} parameters={'text-lg'}/>
            <span>2023-12-23</span>
            <span>12:00 PM</span>
          </div>
        </div>
        <p className="text-left p-2">sdasdsdsd</p>
      </div>
      <Icon id={'fa-trash'} parameters={'text-lg'}/>
    </div>
  )
}
