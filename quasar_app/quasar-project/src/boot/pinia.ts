import { createPinia } from "pinia";

export default ({ app }: any) => {
  app.use(createPinia());
};
