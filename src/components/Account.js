import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import { deleteAccount, loadAccountById } from './../actions/accounts'
require('./../style.css')

class Account extends Component {
    static propTypes = {
        account: PropTypes.object,

        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    componentWillReceiveProps(newProps) {
        const { id } = newProps.account
        if (newProps.isOpen && !this.props.isOpen && !newProps.account.text) loadAccountById({ id })
    }

    render() {
        return (
            <div>
                {this.getTitle()}
                <CSSTransition transitionName="example" transitionAppear={true}
                               transitionAppearTimeout={500}
                               transitionEnterTimeout={500}
                               transitionLeaveTimeout={300}>
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }

    getTitle() {
        const { onClick, selected, account: { title } } = this.props
        const selectedStyle = selected ? {color: 'red'} : null;
        return  (
            <h3 style = {selectedStyle} onClick={onClick}>
                {title}
            </h3>
        )
    }

    getBody() {
        if (!this.props.isOpen) return null
        const {account} = this.props
        if (account.loading) return <div key="account!"><h2>Loading...</h2></div>
        return (
            <div key="account">
                <a href="#" onClick = {this.handleDeleteAccount}>delete this account</a>
                <p>{account.text}</p>
                <CommentList account = {account}/>
            </div>
        )
    }

    handleDeleteAccount = (ev) => {
        ev.preventDefault()
        deleteAccount(this.props.account.id)
    };
}

export default Account