export const actionEvent = (type: string, payload?: unknown): ActionEvent => ({
  payload,
  type,
});

export const actionTypes = {
  decremented: 'counter/decremented',
  incremented: 'counter/incremented',
};
