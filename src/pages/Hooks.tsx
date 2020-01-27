import React, {useState, useEffect} from 'react';


const Hooks = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log("useEffect")
    console.log({
      visible
    });

    return ()=>{
      console.log('clean')
    }
  });

  return (
    <div>
    <button
      onClick={() => {
        setVisible(!visible);
      }}
    >
      {visible ? '숨기기' : '보이기'}
    </button>
    <hr />
    {visible && <h2>visible</h2>}
  </div>
    );
  }

export default Hooks;
