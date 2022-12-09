import {
  TypeBold,
  TypeItalic,
  TypeUnderline,
  Link,
  Image,
  Fonts
} from 'react-bootstrap-icons'

const LexicalToolbar = ({ title = '' }) => {
  const doSomething = () => 'button was clicked'
  const toolbarOptions = [
    { title: '', icon: <Fonts className="h-6 w-6" />, action: doSomething },
    { title: '', icon: <Fonts />, action: doSomething },
    { title: '', icon: <TypeBold />, action: doSomething },
    { title: '', icon: <TypeItalic />, action: doSomething },
    { title: '', icon: <TypeUnderline />, action: doSomething },
    { title: '', icon: <Link />, action: doSomething },
    { title: '', icon: <Image />, action: doSomething }
  ]
  return (
    <div className="black_border  borderF mx-auto mb-1F p-1 flex w-full select-none items-center justify-end rounded-t-mdF border-b-0">
      <div className="font-semiboldF text-neutral-500F text-sm hidden">{title}</div>
      <div className="flex space-x-0">
        {toolbarOptions.map((item, index) => (
          <div
            key={`lexicaltoolbar${item.title}${index}`}
            className="box_radius flex h-10 w-10 cursor-pointer items-center justify-center hover:bg-neutral-100"
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LexicalToolbar
