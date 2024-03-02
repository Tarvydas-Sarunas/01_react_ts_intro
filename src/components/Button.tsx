type ButtonProps = {
  onClick: () => void;
  sumuok: (a: number, b: number) => number;
};

export default function Button(props: ButtonProps) {
  return (
    <button className='btn btn-outline-info' onClick={props.onClick}>
      Click me
    </button>
  );
}
