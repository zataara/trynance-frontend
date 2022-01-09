import AuthNavBar from "../components/AuthNavBar";

const UnAuthLayout = ({ children }) => {
  return (
    <>
      <AuthNavBar />
      {children}
    </>
  );
};

export default UnAuthLayout;
