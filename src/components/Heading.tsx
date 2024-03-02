type HeadingProps = {
  title?: string;
  children: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function Heading(props: HeadingProps) {
  console.log('props ===', props);
  return <h3 className={`fs-${props.size}`}>{props.children}</h3>;
}
