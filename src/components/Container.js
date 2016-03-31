import React, { Component, PropTypes } from 'react'
import { accountsStore } from '../stores'
import AccountList from './AccountList'
import { loadAllAccounts } from './../actions/accounts'

class Container extends Component {
    state = {
        accounts: accountsStore.getOrLoadAll()
    }

    componentDidMount() {
        accountsStore.addChangeListener(this.change)
    }

    componentWillUnmount() {
        accountsStore.removeChangeListener(this.change)
    }

    render() {
        const { accounts, loading } = this.state
        if (loading) return <h3>Loading...</h3>
        return (
            <div>
                <AccountList accounts = {accounts} />
            </div>
        )
    }

    change = () => {
        this.setState({
            loading: accountsStore.loading,
            accounts: accountsStore.getAll()
        })
    };
}

export default Container