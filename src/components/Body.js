

import { Posts } from './Posts'
import { Graphs } from './Graphs'
import { useEffect } from "react";
import { useState } from "react";

import { useQuery, gql } from '@apollo/client';

export function Body() {
    const [posts, setPosts] = useState([])
    const postsData = usePosts();

    useEffect(() => {
        if (postsData.length) {
            setPosts(postsData)
        }

    }, [postsData])

    return (
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F0F8FF', height: '90vh', justifyContent: 'center' }}>
            {!posts.length ? <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Fetching posts...</h1> :
                <>
                    <Posts posts={posts} />
                    <Graphs posts={posts} />
                </>}
        </div>
    )

}

function usePosts() {
    const { loading, error, data } = useQuery(GET_ALL_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    return data.allPosts;


}

const GET_ALL_POSTS = gql`
      query getPosts {
        allPosts(count: 2000) {
          id
          createdAt
          title
          author {
            id
            firstName
            lastName
          }
        }
      }
    `;