import React, { Component, PropTypes } from 'react'
import { accountsStore } from '../stores'
import { addAccount, loadAllAccounts, loadMatrix } from './../actions/accounts'

import PageHRTransferBOA from './PageHRTransferBOA'


class Container extends Component {
    constructor() {
        super();

        // actions
        loadMatrix();
        loadAllAccounts();
        addAccount('acc1');
        addAccount('acc2', 'acc1');

        this.state = {
            loading: accountsStore.loading,
            step: 1
        }
    }

    componentDidMount() {
        accountsStore.addChangeListener(this.change)
    }

    componentWillUnmount() {
        accountsStore.removeChangeListener(this.change)
    }

    renderStep1() {
        return <PageHRTransferBOA fields={this.state.fields} />
    }    

    renderStep2() {
        return <div>test</div>
    }    

    render() {
        const {accounts, loading, step} = this.state
        if (loading) return <h3>Loading...</h3>
        return (
            <div>
                {step === 1 ? this.renderStep1() : null}
                {step === 2 ? this.renderStep2() : null}
            </div>
        )
    }

    // getFields() {
    //     const acc1 = accountsStore.getAccountsList();
    //     const acc2 = accountsStore.getAccountsList(undefined, acc1.selected);
    //     const amount = {
    //         selected: 0,
    //         list: [{value: 0, label: acc1.currency}, {value: 1, label: acc2.currency}]
    //     };

    //     return {acc1, acc2, amount}        
    // }

    change = () => {
        const fields = {
            acc1: accountsStore.getById('acc1'),
            acc2: accountsStore.getById('acc2')
        };

        this.setState({
            loading: accountsStore.loading,
            fields
        })
    };
}

export default Container