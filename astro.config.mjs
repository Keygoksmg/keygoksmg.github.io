// @ts-check
import partytown from '@astrojs/partytown';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // github pages
    site: 'https://keygoksmg.github.io/',
    
    // partytown settings
    integrations: [partytown({ config: { forward: ["dataLayer.push"] } })],
  });