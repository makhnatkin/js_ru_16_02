import SimpleStore from './SimpleStore'
import { ADD_COMMENT, LOAD_COMMENTS_BY_ARTICLE_ID, _START, _FAIL, _SUCCESS } from '../actions/constants'

import AppDispatcher from '../dispatcher'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args)
        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response, error } = action

            switch (type) {
                case ADD_COMMENT:
                    this.add({
                        id: data.id,
                        text: data.text
                    })
                    break;

                case LOAD_COMMENTS_BY_ARTICLE_ID + _START:
                    break;

                case LOAD_COMMENTS_BY_ARTICLE_ID + _FAIL:
                    this.error = error
                    break

                case LOAD_COMMENTS_BY_ARTICLE_ID + _SUCCESS:
                    response.forEach(this.add)
                    break;

                default: return
            }
        })
    }
}

export default CommentStore