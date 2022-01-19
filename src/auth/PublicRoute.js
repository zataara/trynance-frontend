import React, { useContext } from "react";
import AuthNavBar from "../components/nav/AuthNavBar";

/** "Higher-Order Component" for private routes.
 *
 * In routing component, use these instead of <Route ...>. This component
 * will check if there is a valid current user and only continues to the
 * route if so. If no user is present, redirects to login form.
 */

function PublicRoute({ children }) {
  return (
    <>
      <AuthNavBar />
      {children}
    </>
  );
}

export default PublicRoute;
