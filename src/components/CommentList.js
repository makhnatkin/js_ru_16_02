import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from './../HOC/toggleOpen'
import { addComment, loadCommentsByArticleId } from './../actions/comment'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,

        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    state = {
        comment: '',
        loaded: !!this.props.article.getRelation('comments').join(''), // вдруг уже загружено
        loading: false,
        error: false
    }

    componentWillReceiveProps(nextProps) {
        // TODO: добавить обработку state.error
        const { loaded, loading } = nextProps.article.comments;
        
        if (!this.state.loaded && (loaded || loading)) {
            this.setState({
                loaded,
                loading
            });
            if (loaded) this.props.toggleOpen()
        }
    }

    render() {
        // TODO: добавить обработку state.error
        const { isOpen, article } = this.props
        const { loaded, loading } = this.state;
        const actionText = !article.comments.length ? 'No comment yet, add first!' : isOpen ? 'hide comments' : 'show comments'

        return (
            <div>
                <div>Comments: {article.comments.length}</div>
                <a href = "#" onClick = {this.handleClick.bind(this)}>{actionText}</a>
                { loading ? <h3>Loading comments...</h3> : null }
                { loaded ? this.getBody() : null }
            </div>
        )
    }

    getAddCommentBody() {
        return (
            <div>
                <input value = {this.state.comment} onChange = {this.commentChange}/>
                <a href = "#" onClick = {this.submitComment}>add comment</a>
            </div>
        )        
    }

    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return null
        const commentList = article.getRelation('comments').map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)

        return (
            <div>
                <ul>{isOpen ? commentList : null}</ul>
                { this.getAddCommentBody() }
            </div>
        )
    }

    commentChange = (ev) => {
        this.setState({
            comment: ev.target.value
        })
    }

    submitComment = (ev) => {
        ev.preventDefault()
        addComment(this.state.comment, this.props.article.id)
        this.setState({
            comment: ''
        })
    }

    handleClick = (ev) => {
        const { toggleOpen, article } = this.props;
        ev.preventDefault()
        //замечание к стилю, а не к Реакту - такие проверки очень тяжело читаются лучше if (...) return toggleOpen() 
        if (this.state.loaded) {
            toggleOpen();
        } else if (article.comments.length) {
            loadCommentsByArticleId({id: article.id})
        } else {
            this.setState({
                loaded: true,
                loading: false
            }, this.props.toggleOpen());
        }
    }
}

export default toggleOpen(CommentList)
