import { formatDate } from "../util/formatDate";




export function Post({ post }) {

    return <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', marginLeft: '0px', paddingLeft: '20px', backgroundImage: 'linear-gradient(aqua, blue)', borderRadius: '20px', }}>
        <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>Title: {post.title}</h4>
        <h5 style={{ marginTop: '5px', marginBottom: '5px' }}>Created at: {formatDate(new Date(parseInt(post.createdAt)))}</h5>
        <h5 style={{ marginTop: '5px', marginBottom: '5px' }}>Author: {post.author.firstName + ' ' + post.author.lastName}</h5>
    </div>
}