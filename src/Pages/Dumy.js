// import React, { useRef } from 'react';

// function Dumy() {
//   const usernameRef = useRef(null);
//   const passwordRef = useRef(null);

//   function handleSubmit(event) {
//     event.preventDefault();
//     const username = usernameRef.current.value;
//     const password = passwordRef.current.value;
//     console.log(`Username: ${username}`);
//     console.log(`Password: ${password}`);
//   }

//   return (
//     <form >
//       <label>
//         Username:
//         <input type="text" ref={usernameRef} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" ref={passwordRef} />
//       </label>
//       <br />
//       <button type="submit" onClick={handleSubmit}>Submit</button>
//     </form>
//   );
// }

// export default Dumy
// import React, { useRef, useState, useEffect } from 'react';

// function Dumy() {
//   const [width, setWidth] = useState(100);
//   const divRef = useRef(null);

//   useEffect(() => {
//     divRef.current.style.width = width + 'px';
//   }, [width]);

//   const handleClick = () => {
//     setWidth(width + 500);
//   };

//   return (
//     <div ref={divRef}>
//       <button onClick={handleClick}>Increase Width</button>
//     </div>
//   );
// }
// export default Dumy;


import React, { useRef, useState,useEffect } from 'react';

function Dumy() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>

      <p>Previous Count: {prevCountRef.current}</p>
      <p>Current Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      
    </div>
  );
}

export default Dumy;