/* eslint-disable check-file/filename-naming-convention */
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: Root,
});

function Root() {
  return (
    <>
      <div className="flex items-center justify-between p-3">
        <div className="space-x-2">
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
        <ThemeToggle />
      </div>
      <hr />
      <Outlet />
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </>
  );
}
