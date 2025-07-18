import { Link } from "react-router-dom"


interface BlogcardProps{
  id:number
  authorName:string
  title:string
  content:string
  publishedDate: string
}
const Blogcard = ({
  id,
  authorName,
  title,
  content,
  publishedDate
}: BlogcardProps) => {
  return (
    <Link to={`/blogs/${id}`} className="no-underline text-black">
      <div className="border-b border-slate-400 pb-4 cursor-pointer">
        <div className='flex pt-2 ' >
          <div className='flex justify-center flex-col'>
            <Avatar name={authorName}/>
          </div>
          <div className='font-extralight pl-2'>
            {authorName}
          </div>   
          <div className='text-xs flex py-1 pl-2 justify-center '>
            &#9679;
          </div>
          <div className='font-thin text-slate-500 pl-2 '>
            {publishedDate} 
          </div>
          
        </div>
        <div className='pt-2 text-xl font-semibold'>
          {title}
        </div>
        <div className='text-md font-thin'>
          {content.slice(0,100) + "..."}
        </div>
        <div className=' pt-4 text-slate-400 text-sm font-thin'>
          {`${Math.ceil(content.length / 100)} minutes(s) read`}
        </div>
      </div>
    </Link>
  )
}

export default Blogcard
 
export function Avatar ({ name, size="small" }: {name : string , size?:"small" | "big"}) {
  return <div className={`relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-500 rounded-full ${size === "small" ? "w-6 h-6" : "w-8 h-8"}`}>
    <span className={`text-xs text-gray-50 ${size === "small" ? "text-xs" : "text-md"}`}>
      {name[0]}
    </span>
  </div>
} 
