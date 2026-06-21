import { useCountUp } from './hooks';

export default function CountUp({ to, prefix = '', suffix = '', dur = 1400, style }) {
  const [ref, val] = useCountUp(to, dur);
  return <span ref={ref} style={style}>{prefix}{val}{suffix}</span>;
}
