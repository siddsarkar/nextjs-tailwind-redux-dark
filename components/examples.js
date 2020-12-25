import Clock from "./clock";
import Counter from "./counter";

const Examples = () => {
  return (
    <div className='clock'>
      <Clock />
      <Counter />
      <style>
        {`
         .clock {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              margin-bottom:10px;
              margin-top:10px;
            }
      `}
      </style>
    </div>
  );
};

export default Examples;
