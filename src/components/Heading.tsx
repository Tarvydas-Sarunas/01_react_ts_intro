type HeadingProps = {
  title?: string;
  children: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function Heading(props: HeadingProps) {
  const size = props.size ? props.size : 3;
  console.log('props ===', props);
  return <h3 className={`fs-${size}`}>{props.children}</h3>;
}
