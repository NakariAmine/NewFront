import { useEffect, useState, ComponentType } from "react";
import { useRouter } from "next/navigation";

interface WithAuthProps {}

function withAuth<T extends WithAuthProps>(
  WrappedComponent: ComponentType<T>,
  allowedRoles: string[],
) {
  const AuthenticatedComponent = (props: T) => {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");

      if (!token) {
        console.log("No user is currently authenticated");
        router.push("/authentication");
        return;
      }

      console.log("Allowed roles:", allowedRoles);
      console.log("User role:", role);

      if (allowedRoles.includes(role!)) {
        setIsAuthorized(true);
      } else {
        console.log(`User with role ${role} is not allowed.`);
        router.push("/access-denied");
        return;
      }

      setIsLoading(false);
    }, [router, allowedRoles]);

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (!isAuthorized) {
      return null; // Render nothing while redirecting
    }

    return <WrappedComponent {...props} />;
  };

  // Set the display name for debugging
  AuthenticatedComponent.displayName = `WithAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return AuthenticatedComponent;
}

export default withAuth;
