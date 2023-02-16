import React, { useEffect, useState } from 'react';

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Interval in functional component');
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Function Component</h1>
      <h1>{props.name}</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setCount2(count2 * 2)}>{count2}</button>
    </div>
  );
};

export default Profile;
