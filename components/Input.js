export default function Input(props) {
  const classNames = ["focus:outline-none relative"];

  if (props.outlined) {
    classNames.push(
      "bg-transparent p-2 rounded-md w-[230px] h-[40px] border-[1px]"
    );
  }

  if (props.className) {
    classNames.push(props.className);
  }

  if (props.width) {
    classNames.push(`w-[${props.width}]`);
  }

  if (props.height) {
    classNames.push(`w-[${props.height}]`);
  }

  if (props.leftIcon) {
    classNames.push("indent-[35px]");

    return (
      <div className="flex items-center">
        <svg
          width="30"
          height="30"
          fill="#000000"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-50 m-2"
        >
          <path d="M5.667 5.647c-2.098 2.089-3.154 4.737-3.687 6.839l9.484 9.442c2.111-.53 4.77-1.581 6.868-3.67 2.098-2.089 3.155-4.737 3.687-6.84l-9.484-9.441c-2.111.53-4.77 1.583-6.868 3.67Zm10.031 1.576 1.056 1.051-1.584 1.577 1.056 1.05-1.06 1.05-1.057-1.05-1.054 1.05 1.054 1.052-1.055 1.051-1.055-1.05-1.055 1.05 1.055 1.051-1.055 1.051-1.054-1.05-1.583 1.576L7.25 15.63l1.583-1.577-1.056-1.05 1.056-1.053 1.057 1.052 1.054-1.052L9.89 10.9l1.055-1.05L12 10.9l1.056-1.05L12 8.8l1.056-1.051 1.054 1.05 1.589-1.576Z"></path>
          <path d="M22.43 9.3c.345-2.567-.68-7.048-.68-7.048s-4.506-1.025-7.084-.681a19.02 19.02 0 0 0-.375.053l8.084 8.049.055-.373Z"></path>
          <path d="M1.571 14.607c-.345 2.567.681 7.141.681 7.141s2.813.75 4.681.75a18.35 18.35 0 0 0 2.776-.215l-8.084-8.049c-.02.13-.038.254-.054.373Z"></path>
        </svg>

        <input
          type="input"
          className={classNames.join(" ")}
          placeholder={props.placeHolder}
        />
      </div>
    );
  }

  if (props.rightIcon) {
    classNames.push("");

    return (
      <div className="flex items-center">
        <input
          type="input"
          className={classNames.join(" ")}
          placeholder={props.placeHolder}
        />

        <svg
          width="30"
          height="30"
          fill="#000000"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-50 m-2 left-[180px]"
        >
          <path d="M5.667 5.647c-2.098 2.089-3.154 4.737-3.687 6.839l9.484 9.442c2.111-.53 4.77-1.581 6.868-3.67 2.098-2.089 3.155-4.737 3.687-6.84l-9.484-9.441c-2.111.53-4.77 1.583-6.868 3.67Zm10.031 1.576 1.056 1.051-1.584 1.577 1.056 1.05-1.06 1.05-1.057-1.05-1.054 1.05 1.054 1.052-1.055 1.051-1.055-1.05-1.055 1.05 1.055 1.051-1.055 1.051-1.054-1.05-1.583 1.576L7.25 15.63l1.583-1.577-1.056-1.05 1.056-1.053 1.057 1.052 1.054-1.052L9.89 10.9l1.055-1.05L12 10.9l1.056-1.05L12 8.8l1.056-1.051 1.054 1.05 1.589-1.576Z"></path>
          <path d="M22.43 9.3c.345-2.567-.68-7.048-.68-7.048s-4.506-1.025-7.084-.681a19.02 19.02 0 0 0-.375.053l8.084 8.049.055-.373Z"></path>
          <path d="M1.571 14.607c-.345 2.567.681 7.141.681 7.141s2.813.75 4.681.75a18.35 18.35 0 0 0 2.776-.215l-8.084-8.049c-.02.13-.038.254-.054.373Z"></path>
        </svg>
      </div>
    );
  }

  return (
    <input
      type="input"
      className={classNames.join(" ")}
      placeholder={props.placeHolder}
    />
  );
}
