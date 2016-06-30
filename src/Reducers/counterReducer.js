export default function counterReducer(state = [], action) {
  switch (action.type) {
    case 'INITIALIZE':
      return [...state, 0];
    case 'GET_DATA': {
      return action.data
    }
    case 'INCREASE': {
      const newArr = [...state];
      newArr[action.id] = newArr[action.id] + 1;
      return newArr;
    }
    case 'DECREASE': {
      const newArr = [...state];
      newArr[action.id] = newArr[action.id] - 1;
      return newArr;
    }
    default:
      return state;
  }
}