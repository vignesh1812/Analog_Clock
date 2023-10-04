import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [rotate, setrotate] = useState(new Date() );

  useEffect(() => {
    const timerId = setInterval(() => {
      setrotate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []); 

  return (
    <div className="analog">
      
      <div
        className="hrs line"
        style={{
          transform: `rotateZ(${rotate.getHours() * 30}deg)`,
        }}
      />
      <div
        className="min line"
        style={{
          transform: `rotateZ(${rotate.getMinutes() * 6}deg)`,
        }}
      />
      <div
        className="sec line"
        style={{
          transform: `rotateZ(${rotate.getSeconds() * 6}deg)`,
        }}
      />
      <div className="num nums-1">1</div>
       <div className="num nums-2">2</div>
       <div className="num nums-3">3</div>
       <div className="num nums-4">4</div>
       <div className="num nums-5">5</div>
       <div className="num nums-6">6</div>
       <div className="num nums-7">7</div>
       <div className="num nums-8">8</div>
       <div className="num nums-9">9</div>
       <div className="num nums-10">10</div>
       <div className="num nums-11">11</div>
       <div className="num nums-12">12</div>

    </div>
  );
}

export default App;