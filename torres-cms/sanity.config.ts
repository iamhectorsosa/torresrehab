import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'torres-cms',

  projectId: 'g5udunwt',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  document: {
    actions: (prev, context) => {
      return context.schemaType === 'pages' || context.schemaType === 'about'
        ? prev.filter((i) => i.action !== 'delete')
        : prev
    },
  },

  schema: {
    types: schemaTypes,
  },
})
