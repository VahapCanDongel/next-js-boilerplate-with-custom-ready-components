export default function FullContainer(props) {
  return (
    <div className={`w-full h-full ${props.className}`}>{props.children}</div>
  );
}
