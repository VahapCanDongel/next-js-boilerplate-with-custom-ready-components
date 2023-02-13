export default function FlexCol(props) {
  return (
    <div className={`flex flex-col gap-2 ${props.className}`}>
      {props.children}
    </div>
  );
}
