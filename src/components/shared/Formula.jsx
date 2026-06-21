export default function Formula({ children, style }) {
  return (
    <span style={{
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontStyle: 'italic',
      fontWeight: 600,
      direction: 'ltr',
      ...style,
    }}>
      {children}
    </span>
  );
}
