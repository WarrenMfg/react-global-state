import React from 'react';
import DisplayInfo from './DisplayInfo';
import Buttons from './Buttons';
import withGlobalStore from './withGlobalStore';

function Event({globalStore, event, stateProperty, type}) {
  const {price, quantity, subtotal} = globalStore[stateProperty];
  const {dispatch} = globalStore;
  return (
    <>
      <h2>{event}</h2>
      <DisplayInfo price={price} quantity={quantity} subtotal={subtotal} />
      <Buttons dispatch={dispatch} type={type} />
    </>
  )
}

const memoized = React.memo(Event, (prevProps, nextProps) => {
  const {globalStore: prevGlobalStore, stateProperty: prevStateProperty} = prevProps;
  const {globalStore: nextGlobalStore, stateProperty: nextStateProperty} = nextProps;
  if (prevGlobalStore[prevStateProperty] === nextGlobalStore[nextStateProperty]) {
    return true;
  } else {
    return false;
  }
});

export default withGlobalStore(memoized);