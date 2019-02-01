import React from 'react';
//import { fetchPosts } from '../actions/postActions';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payload: []
        };
       
    }

    // componentDidMount() {
    //     if (this.props.data.type !== 'Posts') {
    //         fetchPosts().then(response => {
    //             this.setState({
    //                 payload: response
    //             });
    //         });
    //     }
    //     else {
    //         this.setState({
    //             payload: this.props.data.payload
    //         });
    //     }
    // }


    render () {
        console.log('this.props in render of Posts', this.props);
        const posts = this.props.data.payload.map(post => <div key={post.id}><h3> {post.title}</h3> <p>{post.body}</p></div>);
        return <div>
                <h1>Posts component</h1>
                {posts}
            </div>;
}
}

export default Posts;