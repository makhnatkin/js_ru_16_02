import React, { Component, PropTypes } from 'react'
import { setSelectedAccount } from './../actions/accounts'
import Select from 'react-select'
require('react-select/dist/react-select.css')

class Account extends Component {
    static propTypes = {};

    render() {
        const {id, list, selected, title} = this.props;
        return (
            <div>
                <div>{title}</div>
                <Select
                    value={selected}
                    options={list}
                    onChange={(selected) => setSelectedAccount(this.props.id, selected)}
                />
            </div>
        )
    }
}

export default Account