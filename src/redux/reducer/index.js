const initialState = { type: "Бүх төрөл" };
const reducer = (state = initialState, action) => {
  if (action.type === "CHANGE") {
    return { initialState: { type: action.utga } };
  }
};
export default reducer;
