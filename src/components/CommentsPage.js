import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { commentStore } from '../stores'
import { loadAllComments, loadCommentsByPage } from '../actions/comment'


class CommentsPage extends Component {
    constructor(props) {
        super()
        const { params: { id=1 }} = props

        setTimeout(() => loadAllComments())

	    this.state = {
	        comments: commentStore.getByPage(id),
	        loading: commentStore.loading,
            totalPages: commentStore.totalPages
	    }

    }

    componentDidMount() {
        commentStore.addChangeListener(this.change)
    }

    componentWillUnmount() {
        commentStore.removeChangeListener(this.change)
    }

    componentWillReceiveProps(props) {
        // setTimeout(() => loadCommentsByPage(props.params.id))
        this.setState({
            comments: commentStore.getByPage(props.params.id)
        })
    }

    render() {
        const { loading } = this.state
        if (loading) return <h3>Loading...</h3>
        return (
            <div>
                {this.getComments()}
                {this.getMenu()}
            </div>
        )
    }

    getComments() {
        const links = this.state.comments.map((comment) =>
            <li key={comment.id}>{comment.text}</li>
        )
        return <ul>{links}</ul>
    }

    getMenu() {
        let links = [];
        for (var i = 1; i <= this.state.totalPages; i++) {
            links.push(<li key={i}>
                <Link to={`/comments/${i}`}
                    activeClassName = "active"
                    activeStyle = {{color: 'red'}}
                >
                    {i}
                </Link>
            </li>)
        }
        return <ul>{links}</ul>
    }


    change = () => {
        this.setState({
            loading: commentStore.loading,
            comments: commentStore.getByPage(this.props.params.id || 1),
            totalPages: commentStore.totalPages
        })
    };
}

export default CommentsPage