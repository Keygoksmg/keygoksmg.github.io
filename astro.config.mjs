// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // github pages
    site: 'https://keygoksmg.github.io/',
    // base: '/keygoksmg.github.io',

    // partytown settings
    integrations: [], // partytown({ config: { forward: ["dataLayer.push"] } })
  });