export default function Typography(props) {
  const classNames = [""];

  if (props.mainTitle) {
    classNames.push("text-xl font-bold");
  }

  if (props.subTitle) {
    classNames.push("text-md font-bold");
  }

  if (props.text) {
    classNames.push("text-sm");
  }

  if (props.className) {
    classNames.push(props.className);
  }

  return <div className={classNames.join(" ")}>{props.children}</div>;
}
