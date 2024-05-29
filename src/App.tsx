import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <>
    <ToastContainer/>
      <Outlet/>
    </>
  );
};

export default App;