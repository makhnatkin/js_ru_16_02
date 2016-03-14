import React, { Component, PropTypes } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import Article from './Article'
import CommentList from './CommentList'
import { selecteArticles } from './../actions/articles'

class ArticleList extends Component {
    constructor() {
        super()
        this.state = {
            selected: [],
            open: null
        }
    }
    render() {
        const { titles, articles } = this.props
        const options = titles.map(article => {
            return {
                value: article.id,
                label: article.title
            }
        });

        const selectedArtices = articles ? articles.map(article => article.id).join() : ''
        const articleList = articles ? articles.map((article) =>
            <li key={article.id}>
                <Article article={article}
                         isOpen = {article.id === this.state.open}
                         onClick = {this.open.bind(this, article.id)}
                         select = {this.select(article.id).bind(this)}
                         selected = {this.state.selected.includes(article.id)}/>
            </li>
        ) : null
        return (
            <div>
                <Select
                    multi={true}
                    name="form-field-name"
                    value={selectedArtices}
                    options={options}
                    onChange={this.handleSelect.bind(this)}
                />
                <ul>
                    {articleList}
                </ul>
            </div>
        )
    }

    handleSelect(ids) {
        selecteArticles({ ids })
    }

    open(open) {
        this.setState({ open })
    }

    select(id) {
        return function() {
            this.setState({
                selected: this.state.selected.concat(id)
            })
        }
    }
}

export default ArticleList