
import { Post } from "./Post";


export function Posts({ posts }) {




  return (

    <div style={{
      display: 'flex', flexDirection: 'column', width: '30vw', minWidth: '300px', margin: '1rem'
    }}>
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{posts.length ? `${posts.length} Posts` : 'No posts'}</h1>
      <div style={{ overflowY: 'scroll' }}>
        {posts.map((post, index) => (<Post post={post} key={index} />))}
      </div>
    </div >

  )
}

