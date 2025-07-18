import React from 'react'
import Blogcard from '../components/Blogcard'
import Appbar from '../components/Appbar'
import useBlogs from '../hooks'

const Blogs = () => {
  const {loading , blogs} = useBlogs();

  if(loading){
    return<div>
      Loading...
    </div>
  }

  return (
    <div >
      <Appbar />
      <div className='flex justify-center'>
        <div className=' '>
          {blogs.map (blog => <Blogcard  
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title= {blog.title}
              content={blog.content}
              publishedDate={"6 sep 2004"} />)}
          
        </div>
      </div>
    </div>
  )
}

export default Blogs
