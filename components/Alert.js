export default function Alert(props) {
  const classNames = [
    "w-[400px] h-[100px] rounded-md flex justify-center items-center gap-6 shadow-md",
  ];

  let alertMessage = "";

  let alertIcon = null;

  if (props.Error) {
    classNames.push("bg-red-500 text-white");
    alertMessage = "Error!";

    alertIcon = (
      <svg
        width="30"
        height="30"
        fill="#ffffff"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.066 8.995a.75.75 0 1 0-1.06-1.061L12 10.939 8.995 7.934a.75.75 0 1 0-1.06 1.06L10.938 12l-3.005 3.005a.75.75 0 0 0 1.06 1.06L12 13.06l3.005 3.006a.75.75 0 0 0 1.06-1.06L13.062 12l3.005-3.005Z"></path>
      </svg>
    );
  }

  if (props.Success) {
    classNames.push("bg-green-500 text-white");
    alertMessage = "Success!";

    alertIcon = (
      <svg
        width="30"
        height="30"
        fill="#ffffff"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18.03 7.97a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l3.47 3.47 6.47-6.47a.75.75 0 0 1 1.06 0Z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  }

  if (props.Warning) {
    classNames.push("bg-yellow-500 text-white");
    alertMessage = "Warning!";

    alertIcon = (
      <svg
        width="30"
        height="30"
        fill="#ffffff"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
        <path d="M12 11.75a.75.75 0 0 1 .75.75v5a.75.75 0 1 1-1.5 0v-5a.75.75 0 0 1 .75-.75Z"></path>
        <path
          fill-rule="evenodd"
          d="M14.27 3.993a2.749 2.749 0 0 0-4.54 0l-.432.632a75.95 75.95 0 0 0-6.944 12.563l-.09.208a2.511 2.511 0 0 0 2.024 3.497 69.43 69.43 0 0 0 15.424 0 2.511 2.511 0 0 0 2.024-3.497l-.09-.208a75.951 75.951 0 0 0-6.944-12.563l-.432-.632Zm-3.302.846a1.25 1.25 0 0 1 2.064 0l.432.632a74.444 74.444 0 0 1 6.806 12.315l.09.208a1.011 1.011 0 0 1-.814 1.408c-5.015.56-10.077.56-15.092 0a1.011 1.011 0 0 1-.815-1.408l.09-.208a74.45 74.45 0 0 1 6.807-12.315l.432-.632Z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  }

  if (props.className) {
    classNames.push(props.className);
  }

  return (
    <div className={classNames.join(" ")}>
      <div className="flex flex-col items-center">
        {alertIcon}
        {alertMessage}
      </div>
      <div>{props.children}</div>
    </div>
  );
}
