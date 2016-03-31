import React, { Component, PropTypes } from 'react'
import Account from './Account'
import CommentList from './CommentList'
import Select from 'react-select'
require('react-select/dist/react-select.css')

class AccountList extends Component {
    constructor() {
        super()
        this.state = {
            open: null,
            selected: []
        }
    }
    render() {
        const { selected } = this.state
        const accounts = this.props.accounts
            .filter(({ id }) => selected.includes(id))
            .map((account) =>
                <li key={account.id}>
                    <Account account={account}
                             isOpen = {account.id === this.state.open}
                             onClick = {this.open.bind(this, account.id)}
                             />
                </li>
            )
        return (
            <div>
                {this.getFilter()}
                <ul>
                    {accounts}
                </ul>
            </div>
        )
    }

    getFilter() {
        const options = this.props.accounts.map(({ title, id }) => {
            return {
                label: title,
                value: id.toString()
            }
        })
        return <Select
            value = {this.state.selected}
            options = {options}
            multi = {true}
            onChange = {this.changeFilter}
        />
    }

    changeFilter = (selected) => {
        this.setState({ selected })
    }

    open(open) {
        this.setState({ open })
    }
}

export default AccountList