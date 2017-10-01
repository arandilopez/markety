import * as types from './mutations-types'

export const setUnit = ({ commit }, unit) => {
  commit(types.SET_UNIT, unit)
}
