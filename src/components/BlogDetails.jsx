import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='w-11/12 max-w-[660px] my-16 justify-center items-center mx-auto'>
      <NavLink to={`/blog/${post.id}`} >
        <span className='font-bold text-lg py-2'>{post.title}</span>
      </NavLink>
      <p className='text-sm'>
        By
        <span className='itallic'>{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span>{post.category}</span>
        </NavLink>
      </p>
      <p className='text-sm'> Posted on {post.date} </p>
      <p className='text-sm mt-[10px]'> {post.content}</p>
      <div>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='text-blue-500 underline font-bold text-xs p-1'>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
