import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupApi({ fullName, email, password }),

    onSuccess: (user) => {
      toast.success(
        `Account successfully created! Please verify the new account from the user's email address`
      );
      //   navigate("/login", { replace: true });
    },

    onError: (error) => {
      console.log(error.message);
      toast.error(`Provided email or password are incorrect`);
    },
  });

  return { signup, isLoading };
}
