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

        const options = this.props.accounts
            .filter(({productType, productStatus}) => (productStatus === 'ACTIVE' && productType === 'CURRENT_ACC'))
            .map(({id, productName, productAlias}) => {
                return {
                    label: productName || productAlias,
                    value: id
                }
            });

        return (
            <div>
                <div>account 1:</div>
                <Select
                    value = {this.state.selected}
                    options = {options}
                    onChange = {this.changeFilter}
                />

                <div>account 2:</div>
                <Select
                    value = {this.state.selected}
                    options = {options}
                    onChange = {this.changeFilter}
                />

                <ul>
                    {accounts}
                </ul>
            </div>
        )
    }

    changeFilter = (selected) => {
        this.setState({ selected })
    }

    open(open) {
        this.setState({ open })
    }
}

export default AccountList