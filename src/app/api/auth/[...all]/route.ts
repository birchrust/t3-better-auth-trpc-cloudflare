import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "~/server/auth/root"; // path to your auth file

export const { POST, GET } = toNextJsHandler(auth);
