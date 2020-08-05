import React from 'react';

function MaskingDiv({ isLoading }) {
  return (
    <div className='masking-div' style={{ display: `${isLoading ? 'block' : 'none'}` }}>
      <img src='spinner.gif' width='100' height='100' />
    </div>
  );
}

export default React.memo(MaskingDiv, (prevProps, nextProps) => {
  if (prevProps.isLoading === nextProps.isLoading) {
    return true;
  } else {
    return false;
  }
});
