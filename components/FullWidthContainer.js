export default function FullWidthContainer(props) {
  return <div className={`w-full ${props.className}`}>{props.children}</div>;
}
