import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://docs.capgo.app',
  integrations: [
    starlight({
      title: 'Capgo',
      logo: { src: './logo.svg' },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          link: '/',
        },
        {
          label: 'How To',
          link: '/how-to',
        },
        {
          label: 'Plugin',
          autogenerate: { directory: 'plugin' },
        },
        {
          label: 'Tooling',
          autogenerate: { directory: 'tooling' },
        },
        {
          label: 'Upgrade',
          autogenerate: { directory: 'upgrade' },
        },
        {
          label: 'v3',
          autogenerate: { directory: 'v3' },
        },
        {
          label: 'Self Hosted',
          items: [
            { label: 'Getting Started', link: '/self-hosted/getting-started' },
            { label: 'Auto Update', autogenerate: { directory: 'self-hosted/Auto Update' } },
            { label: 'Manual', link: '/self-hosted/manual' },
          ],
        },
      ],
    }),
  ],
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
})
