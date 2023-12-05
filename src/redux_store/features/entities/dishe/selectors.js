export const selectDishModule = (state) => state.dish

export const selectDishEntities = (state) => selectDishModule(state).entities


export const selectDish = (state, id ) => selectDishEntities(state)[id]