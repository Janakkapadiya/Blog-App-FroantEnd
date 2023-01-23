import CustomNavbar from "./CustomNavbar";
import 'bootstrap/dist/css/bootstrap.css';

const Base = ({ title = "welcome to my website", children }) => {
  return (
    <div>
      <CustomNavbar/>

      {children}

    </div>
  );
};

export default Base;
