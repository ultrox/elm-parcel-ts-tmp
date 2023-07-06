declare module '*.elm' {
  interface ElmMain<Ports, Flags> {
    ports: Ports;
  }

  export const Elm: {
    Main: {
      // if there is no node (null), Elm will throw nice error!
      init<P = any, F = any>(args: { node: Element  | null; flags: F}): ElmMain<P, F>;
    };
  };
}

