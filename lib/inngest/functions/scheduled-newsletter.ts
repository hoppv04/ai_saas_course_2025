import { inngest } from "../client";

export default inngest.createFunction(
  { id: "newsletter/schedule" },
  { event: "newsletter.schedule" },
  async ({ event, step, runId }) => {}
);
