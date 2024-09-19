import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};

export default Error;
