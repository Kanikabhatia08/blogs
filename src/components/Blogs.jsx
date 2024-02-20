import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner'
// import Card from './Card'

const Blogs = () => {

  //consume
  const {posts,loading} = useContext(AppContext);
  console.log(posts)
  return (
    <div className='w-11/12 max-w-[660px] my-16 justify-center items-center mx-auto'>
      {
        loading ? 
        (<Spinner/>) : 
        (
          posts.length === 0 ? 
          (<div>
              <p>No posts Found!</p>
          </div>) : 
          (posts.map((post) => (
          <div key={post.id} className='py-5'>
            <p className='font-bold text-lg py-2'>{post.title}</p>
            <p className='text-sm'>
              By <span className='itallic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
            </p>
            <p className='text-sm'>Posted on {post.date}</p>
            <p className='text-sm mt-[10px]'>{post.content}</p>
            <div>
              {
                post.tags.map((tag, index) => {
                  return <span className='text-blue-500 underline font-bold text-xs p-1' key={index}>{`#${tag}`}</span>
                })
              }
            </div>
          
          </div>)))
        )
      }
        

    </div>
  )
}
export default Blogs
