import Blog from "./components/Blogs";
import Header from "./components/Header";
import { Pagination } from "./components/Pagination";
import "./App.css"
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

export default function App() {

  const {fetchBlogPosts} = useContext(AppContext)

  useEffect(()=>{
    fetchBlogPosts();
},[])
  return (<div>
    <div className="w-full h-full items-center flex flex-col gap-y-2 ">
      <Header />
      <Blog />
      <Pagination />
    </div>
  </div>);
}
