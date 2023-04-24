import React, { useState, useEffect } from 'react';


function useCounter(intitialCount) {
    const [count, setCount] = useState(intitialCount);
  
    useEffect(() => {
      console.log(count);
    }, [count]);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    return {
      count: count,
      increment: increment,
    };
  }
  
  export default useCounter;