type HeadingProps = {
  title: string;
};

function Heading(props: HeadingProps) {
  console.log('props ===', props);
  return <h3>{props.title} visi</h3>;
}

function App() {
  return (
    <div className='container'>
      <h1 className='display-2'>React TS App</h1>
      <Heading title='Sveiki' />
    </div>
  );
}

export default App;
