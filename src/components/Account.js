import React, { Component, PropTypes } from 'react'
import { setSelectedAccount } from './../actions/accounts'
import Select from 'react-select'
require('react-select/dist/react-select.css')

class Account extends Component {
    static propTypes = {};

    render() {
        const {list, selected, title} = this.props;
        return (
            <div>
                <div>{title}</div>
                <Select
                    value={selected}
                    options={list}
                    onChange={(id) => setSelectedAccount(id)}
                />
            </div>
        )
    }
}

export default Account