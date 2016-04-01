import React, { Component, PropTypes } from 'react'
import Account from './Account'
import Select from 'react-select'
require('react-select/dist/react-select.css')

class PageHRTransferBOA extends Component {
    
    render() {
        const {fields: {acc1, acc2, amount}} = this.props;
                // <Select value={amount.selected} options={amount.list} />

        return (
            <div>
                <Account title="acc1:" selected={acc1.selected} list={acc1.list} id={acc1.id} />
                <Account title="acc2:" selected={acc2.selected} list={acc2.list} id={acc2.id} />
                <button onClick={this.handleClick}>next</button>
            </div>
        )
    }

    handleClick() {

    }
}

export default PageHRTransferBOA