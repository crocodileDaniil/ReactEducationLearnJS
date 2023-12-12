export const selestReviewModule = state => state.review

export const selectReviewEntities = state => selestReviewModule(state).entities

export const selectReviewById = (state, id) => selectReviewEntities(state)[id]