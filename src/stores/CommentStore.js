import SimpleStore from './SimpleStore'
import { ADD_COMMENT, LOAD_COMMENTS_BY_ARTICLE_ID, _START, _FAIL, _SUCCESS } from '../actions/constants'

import AppDispatcher from '../dispatcher'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args)
        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case ADD_COMMENT:
                    this.add({
                        id: data.id,
                        text: data.text
                    })
                    break;

                case LOAD_COMMENTS_BY_ARTICLE_ID + _START:
                    // let article = this.getById(data.id)
                    // article.loading = true
                    // article.loaded = false
                    break;

                case LOAD_COMMENTS_BY_ARTICLE_ID + _FAIL:
                    this.error = error
                    break

                case LOAD_COMMENTS_BY_ARTICLE_ID + _SUCCESS:
                    // this.add(response)
                    break;

                default: return
            }

            this.emitChange()
        })
    }
}

export default CommentStore