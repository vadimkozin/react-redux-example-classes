// actions.jsx
export const ActionType = {
  ADD_PHONE: `ADD_PHONE`,
  DELETE_PHONE: `DELETE_PHONE`,
  SET_STATE: `SET_STATE`,
};

export const ActionCreator = {
  addPhone: (phone) => ({
    type: ActionType.ADD_PHONE,
    payload: phone,
  }),

  deletePhone: (phone) => ({
    type: ActionType.DELETE_PHONE,
    payload: phone,
  }),

  setState: (state) => ({
    type: ActionType.SET_STATE,
    payload: state,
  }),
};
