export default function Button(props) {
  const classNames = ["transition-all rounded-md p-2 min-w-[80px] border-[1px]"];

  if (props.outlined) {
    classNames.push("bg-transparent border-[1px]");
  }
  if (props.positive) {
    classNames.push(
      "bg-green-500 min-w-[80px] hover:bg-green-400 text-slate-900"
    );
  }
  if (props.negative) {
    classNames.push("bg-red-500 min-w-[80px] hover:bg-red-400 text-slate-900");
  }
  if (props.className) {
    classNames.push(props.className);
  }
  return <button className={classNames.join(" ")}>{props.children}</button>;
}
