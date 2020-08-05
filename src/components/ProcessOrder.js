import React from 'react'
import MaskingDiv from './MaskingDiv'
import {getStates, calcTotal} from '../utils/utils'
import {submit} from '../actions/submit'
import withGlobalStore from './withGlobalStore'

function ProcessOrder({globalStore}) {
  const states = getStates(globalStore)
  const total = calcTotal(states)
  const handleSubmit = () => {
    if (total > 0) {
      submit(total, globalStore.dispatch)
    }
  }
  return (
    <>
      <h1 className='total'>Total Due: ${total}</h1>
      <br/>
      <button onClick={handleSubmit}>Submit Your Order</button>
      <MaskingDiv isLoading={globalStore.loading.isLoading} />
    </>
  )
}

export default withGlobalStore(ProcessOrder)