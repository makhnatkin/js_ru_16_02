import React, { Component, PropTypes } from 'react'
import { articlesStore } from '../stores'
import ArticleList from './ArticleList'
import { loadAllArticles } from './../actions/articles'

class Container extends Component {
    state = {
        titles: articlesStore.getAll(),
        articles: articlesStore.getFiltered()
    }

    componentDidMount() {
        articlesStore.addChangeListener(this.change)
        loadAllArticles()
    }

    componentWillUnmount() {
        articlesStore.removeChangeListener(this.change)
    }

    render() {
        const { articles, titles, loading } = this.state
        if (loading) return <h3>Loading...</h3>
        return (
            <div>
                <ArticleList titles={titles} articles={articles} />
            </div>
        )
    }

    change = () => {
        this.setState({
            loading: articlesStore.loading,
            titles: articlesStore.getAll(),
            articles: articlesStore.getFiltered()
        })
    };
}

export default Container