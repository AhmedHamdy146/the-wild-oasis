import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1 - load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //   3 - if there is no authenticated user redirect to the login page

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);
  // 2 - while loading show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //   4 - if there is an authenticated user render the children component
  if (isAuthenticated) return children;
}

export default ProtectedRoute;