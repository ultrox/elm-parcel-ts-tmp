import { Elm } from "./Main.elm";

const root = document.querySelector("#app");

const flags = {
  now: Date.now()
} as const; 

type Ports = {
      randomBytes: {
        send(bytes: [number[], string]): void;
      },
      generateRandomBytes: {
        subscribe(
          callback: ([numberOfBytes, path]: [number, string]) => void
        ): void;
      };
}

Elm.Main.init<Ports, typeof flags>({ node: root, flags });
