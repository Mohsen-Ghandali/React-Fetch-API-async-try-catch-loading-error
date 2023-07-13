import React, { useEffect, useState } from "react";
import Posts from "../Posts/Posts";

const App = () => {
  let [posts, setPosts] = useState(null); //for clean up must let use
  let [loading, setLoading] = useState(true)
  let [error, setError] = useState(null)

  useEffect(() => {
    console.log("trigger posts");
    const fetchPosts = async () => {
      try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts")
        let res = await data.json()
        setPosts(res)
        setError(null)
        setLoading(false)
      }catch (error) {
        setError(error.message)
        setLoading(true)
      }
    }
    fetchPosts()

     //------start clean up----
     return () => {
       console.log("trigger clean up");
       setPosts(null)
     }
       //------end clean up----

  }, []);

  return (
    <div className="container-fluid mt-2 text-white ">
      <div className="row m-0 justify-content-center ">

        {error === null ? "" : <h4 className="bg-danger text-center mt-3 py-3 mb-0">{error}</h4>} 
        {/* ---another method---  {error && <h4 className="bg-danger text-center mt-3 py-3 mb-0">{error}</h4>} */}

        {loading === false ? "" : <div className="bg-danger text-center">
          <span className="spinner-border spinner-border-sm mb-2"></span>
          </div>}
           {/*---another method---  {loading && <div className="bg-danger text-center">
          <span className="spinner-border spinner-border-sm mb-2"></span>
          </div>} */}

        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default App;
