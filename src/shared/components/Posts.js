import React from 'react';
import { fetchPostsRequest } from '../actions/postActions';
import { connect } from 'react-redux';

class Posts extends React.Component {
    componentDidMount() {
        if(this.props.posts.length === 0) {
            this.props.fetchPosts();
        }
    }

    renderPosts(posts) {
        return posts.map(post => <div key={post.id}><h3> {post.title}</h3> <p>{post.body}</p></div>);
    }

    render () {
        return <div>
                <h1>Posts component</h1>
                 {this.renderPosts(this.props.posts)} 
            </div>;
    }       
}

const mapStateToProps = state => {
    return {
        posts: state.posts.list
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPostsRequest())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

export function getPostsData(store) {
    return store.dispatch(fetchPostsRequest());
}