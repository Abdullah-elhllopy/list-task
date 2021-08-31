import React from 'react'
import useAxios from './axios'
import Post from './Post';

const PostList = () => {
    const { isLoading, isError, data :posts} = useAxios(
        'https://jsonplaceholder.typicode.com/posts'
      );
      if (isLoading) {
        return( 
            <div class="ui segment" style ={{marginTop : '400px'}}>
            <div class="ui active inverted dimmer">
              <div class="ui text loader">Loading</div>
            </div>
          </div>
        );
      }
    return (
        <div className =" ui centered grid" style ={{marginTop :'50px' ,maxWidth : '100%'}}>
          { posts && <Post data ={ posts} />}
          {isError && <div>Error fetching data.</div>}
        </div>
    )
}
export default PostList
