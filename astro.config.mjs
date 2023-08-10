import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
  site: 'https://docs.capgo.app',
  integrations: [
    starlight({
      title: 'My Docs',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Plugin',
          autogenerate: { directory: 'plugin' },
        },
        {
          label: 'Self Hosted',
          autogenerate: { directory: 'self-hosted' },
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
      ],
    }),
  ],
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
})
