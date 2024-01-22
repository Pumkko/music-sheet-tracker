import { defineConfig } from 'astro/config';
import aws from "astro-sst";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
    output: "server",
    integrations: [solid()],
    adapter: aws(),
});
