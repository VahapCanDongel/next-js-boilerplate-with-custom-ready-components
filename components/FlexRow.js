export default function FlexRow(props) {
  return (
    <div className={`h-auto w-auto flex flex-row gap-2 ${props.className}`}>
      {props.children}
    </div>
  );
}
