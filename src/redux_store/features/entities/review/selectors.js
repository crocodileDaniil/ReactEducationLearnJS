export const selectReviewModule = state => state.review

export const selectReviewEntities = state => selectReviewModule(state).entities

export const selectReviewById = (state, id) => selectReviewEntities(state)[id]

export const selectReviewStatus = (state) => selectReviewModule(state).status;