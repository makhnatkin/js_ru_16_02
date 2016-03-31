import React, { Component } from 'react'
import CommentList from './CommentList'
import toggleOpen from './../mixins/toggleOpen'

const Account = React.createClass({
    mixins: [toggleOpen],

    componentDidMount() {
        console.log('---', this.refs.container);
    },

    render() {
        return (
            <div ref="container">
                <a href = "#" onClick = {this.select} >select</a>
                {this.getTitle()}
                {this.getBody()}
            </div>
        )
    },

    getTitle() {
        const { title } = this.props.account
        const selectedStyle = this.props.selected ? {color: 'red'} : null;
        return  (
            <h3 style = {selectedStyle} onClick={this.toggleOpen}>
                {title}
            </h3>
        )
    },

    getBody() {
        if (!this.state.isOpen) return null
        const {account} = this.props
        return (
            <div>
                <p>{account.body}</p>
                <CommentList comments = {account.comments || []} />
            </div>
        )
    },

    select(ev) {
        ev.preventDefault()
        this.props.select()
    }
})

export default Account