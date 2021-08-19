import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home(){
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

    return(
        <div className="homw">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" /> }
        </div>
    )
}

export default Home;