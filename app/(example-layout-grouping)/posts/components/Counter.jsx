'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador de prueba, para testear como un layout es compartido entre todas sus pages anidadas</p>
      <button onClick={() => setCount(count + 1)}>Aumenta el contador</button>
      <h3>Count: {count}</h3>
    </div>
  );
}
