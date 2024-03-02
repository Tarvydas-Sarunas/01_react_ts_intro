type Container = {
  children: React.ReactNode;
};

export default function Container(props: Container) {
  return <div className='container'>{props.children}</div>;
}
