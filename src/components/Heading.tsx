type HeadingProps = {
  title?: string;
  children: string;
};

export default function Heading(props: HeadingProps) {
  console.log('props ===', props);
  return <h3>{props.children}</h3>;
}
