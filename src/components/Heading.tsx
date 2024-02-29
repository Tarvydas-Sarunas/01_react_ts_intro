type HeadingProps = {
  title: string;
};

export default function Heading(props: HeadingProps) {
  console.log('props ===', props);
  return <h3>{props.title} visi</h3>;
}
