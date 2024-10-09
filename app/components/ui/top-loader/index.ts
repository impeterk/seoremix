import { useFetchers, useNavigation } from "@remix-run/react";
import React, { useMemo } from "react";

import NProgress from "nprogress";

import "./index.css";

export default function TopLoader() {
  let transition = useNavigation();

  let fetchers = useFetchers();
  let state = useMemo<"idle" | "loading">(
    function getGlobalState() {
      let states = [
        transition.state,
        ...fetchers.map((fetcher) => fetcher.state),
      ];
      if (states.every((state) => state === "idle")) return "idle";
      return "loading";
    },
    [transition.state, fetchers]
  );

  React.useEffect(() => {
    // and when it's something else it means it's either submitting a form or
    // waiting for the loaders of the next location so we start it
    NProgress.configure({
      showSpinner: false,
    });
    if (state === "loading") NProgress.start();
    // when the state is idle then we can to complete the progress bar
    if (state === "idle") NProgress.done();
  }, [transition.state]);
}
