import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <>
      <p>opps somthing went wrong</p>
      <p>check here route error using useRouteError hook</p>
      <h3>{err.status + "::::" + err.statusText}</h3>
    </>
  );
};
export default Error;
