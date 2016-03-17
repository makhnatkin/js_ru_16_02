import SimpleStore from './SimpleStore'
import { ADD_COMMENT, LOAD_ALL_COMMENTS,
LOAD_COMMENTS_FOR_ARTICLE, _SUCCESS, _FAIL, _START } from '../actions/constants'
import AppDispatcher from '../dispatcher'
import { loadAllComments } from '../actions/comment'

const commentsCount = 5;

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

                case LOAD_COMMENTS_FOR_ARTICLE + _SUCCESS:
                    response.forEach(this.add)
                    break

                case LOAD_ALL_COMMENTS + _START:
                    this.loading = true
                    this.loaded = false
                    break;

                case LOAD_ALL_COMMENTS + _FAIL:
                    this.loaded = false
                    this.loading = false
                    this.error = error
                    break

                case LOAD_ALL_COMMENTS + _SUCCESS:
                    this.loaded = true
                    this.loading = false
                    this.totalPages = Math.ceil(response.total / commentsCount)
                    response.records.forEach(this.add)
                    break

                default: return
            }

            this.emitChange()
        })
    }

    getByPage(page, count=commentsCount) {
        const begin = page*count-count;
        return this.getAll().slice(begin, begin+count)
    }

    getOrLoadAll() {
        if (!this.loading && !this.loaded) loadAllComments()
        return this.getAll()
    }
}

export default CommentStore