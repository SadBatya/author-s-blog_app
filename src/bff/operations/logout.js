import { sessions } from "../sessions";

export const logout = async(session) => {
  sessions.remove(session);
}