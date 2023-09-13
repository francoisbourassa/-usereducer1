import React, { useReducer } from 'react';
import './App.css';

// Le réducteur est une fonction qui décide comment mettre à jour l'état en fonction de l'action
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="App">
      <header className="App-header">
        <p>Compteur : {state.count}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>
          Augmenter
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>
          Diminuer
        </button>
        <button onClick={() => dispatch({ type: 'RESET' })}>
          Réinitialiser
        </button>
      </header>
    </div>
  );
}

export default App;
