import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: Root,
});

function Root() {
  return (
    <>
      <div className="flex gap-2 p-2">
        <Link
          className="[&.active]:font-bold"
          to="/"
        >
          Home
        </Link>{" "}
        <Link
          className="[&.active]:font-bold"
          to="/about"
        >
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </>
  );
}
