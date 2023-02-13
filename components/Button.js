export default function Button(props) {
  if (props.outlined) {
    return (
      <button
        className={`transition-all bg-transparent border-[1px] border-slate-900 rounded-md p-2 min-w-[80px] ${props.className}`}
      >
        {props.children}
      </button>
    );
  }
  if (props.positive) {
    return (
      <button
        className={`transition-all rounded-md p-2 bg-green-300 min-w-[80px] hover:bg-green-400 text-slate-900 ${props.className}`}
      >
        {props.children}
      </button>
    );
  }
  if (props.negative) {
    return (
      <button
        className={`transition-all rounded-md p-2 bg-red-300 min-w-[80px] hover:bg-red-400 text-slate-900 ${props.className}`}
      >
        {props.children}
      </button>
    );
  }

  return (
    <button
      className={`transition-all rounded-md p-2 bg-slate-900 text-white min-w-[80px] hover:bg-slate-800 ${props.className}`}
    >
      {props.children}
    </button>
  );
}
