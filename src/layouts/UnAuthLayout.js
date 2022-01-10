import AuthNavBar from "../components/nav/AuthNavBar";

const UnAuthLayout = ({ children }) => {
  return (
    <>
      <AuthNavBar />
      {children}
    </>
  );
};

export default UnAuthLayout;
