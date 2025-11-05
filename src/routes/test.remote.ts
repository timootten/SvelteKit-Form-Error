import { form } from "$app/server";
import { error } from "@sveltejs/kit";

export const runTest = form(async () => {
  error(500, "This is a test error from test.remote.ts");
});