import React from 'react'

function Buttons({dispatch, type}) {
  return (
    <>
      <button
        onClick={() => dispatch({type: type.decrement})}
      >Decrement</button>
      <button
        onClick={() => dispatch({type: type.increment})}
      >Increment</button>
    </>
  );
}
// export default Buttons;
export default React.memo(Buttons, () => true);
