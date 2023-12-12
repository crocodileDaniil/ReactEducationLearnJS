export const selectUserModule = state => state.user

export const selectUserEntities = state => selectUserModule(state).entities

export const selectUserById = (state, id) => selectUserEntities(state)[id].name