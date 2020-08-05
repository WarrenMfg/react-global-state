export function getStates(globalStore) {
  return Object.keys(globalStore).reduce((acc, prop) => {
    if (prop === 'loading' || prop === 'dispatch') {
      return acc;
    } else {
      acc[prop] = globalStore[prop];
      return acc;
    }
  }, {});
}

export function calcTotal(states) {
  return Object.keys(states).reduce((acc, key) => {
    return acc + states[key].price * states[key].quantity;
  }, 0);
}
