type GridProps = {
  children: React.ReactNode;
};

export default function Grid(props: GridProps) {
  const styles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
  };
  return <div style={styles}>{props.children}</div>;
}
