export default {
  async fetch(request, env, ctx) {
    env.QUEUE.send("test");
    return new Response("ok");
  },
};