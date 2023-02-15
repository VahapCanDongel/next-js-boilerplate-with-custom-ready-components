export default function Container(props) {
  const classNames = ["flex"];

  if (props.flexRow) {
    classNames.push("flex-row");
  }

  if (props.flexCol) {
    classNames.push("flex-col");
  }

  if (props.allCenter) {
    classNames.push("justify-center");
    classNames.push("items-center");
  }

  if (props.horizontalCenter) {
    classNames.push("items-center");
  }

  if (props.verticalCenter) {
    classNames.push("justify-center");
  }

  if (props.fullWidth) {
    classNames.push("w-full");
  }
  if (props.className) {
    classNames.push(props.className);
  }

  return <div className={classNames.join(" ")}>{props.children}</div>;
}
