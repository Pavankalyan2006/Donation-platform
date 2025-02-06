import React from 'react';

function Donate() {
  return (
    <div>
      <h1>Donate</h1>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="number" placeholder="Amount" required />
        <button type="submit">Donate</button>
      </form>
    </div>
  );
}

export default Donate;
