import { Outlet } from "react-router-dom";
const index = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default index;
