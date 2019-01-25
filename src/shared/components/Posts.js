import React from 'react';

class Posts extends React.Component {
    constructor(props) {
        super(props);
       
    }
    render () {
        const posts = this.props.posts.map(post => <div key={post.id}><h3> {post.title}</h3> <p>{post.body}</p></div>);
        return <div>
                <h1>Posts component</h1>
                {posts}
            </div>;
}
}

export default Posts;