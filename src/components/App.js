import React from 'react';
import Event from './Event';
import ProcessOrder from './ProcessOrder';
import '../index.css';

function App() {
  return (
    <div className='app'>
      <section className='info'>
        <h1>Get Your Tickets!</h1>

        <Event
          event={'Horse Racing'}
          stateProperty={'horse'}
          type={{ increment: 'HORSE_INC', decrement: 'HORSE_DEC' }}
        />

        <Event
          event={'Boxing'}
          stateProperty={'boxing'}
          type={{ increment: 'BOXING_INC', decrement: 'BOXING_DEC' }}
        />

        <Event
          event={'Baseball'}
          stateProperty={'baseball'}
          type={{ increment: 'BASEBALL_INC', decrement: 'BASEBALL_DEC' }}
        />
      </section>

      <ProcessOrder />
    </div>
  );
}

export default App;
