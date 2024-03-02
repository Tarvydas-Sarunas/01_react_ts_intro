//
type GreetProps = {
  name: string;
  amaount: number;
  favoritColor?: string;
};

function Greet(props: GreetProps) {
  console.log('props ===', props);
  return (
    <div>
      <h3 className='alert alert-secondary'>
        Hello there {props.name}, you have won {props.amaount} $
        {props.favoritColor && (
          <span className='fw-normal '>
            , <br />
            And your favorite color is {props.favoritColor}
          </span>
        )}
      </h3>
    </div>
  );
}

export default Greet;
