import type { CollectionConfig } from 'payload'

export const Rewards: CollectionConfig = {
  slug: 'rewards',
  fields: [
    {
      name: 'rewards',
      type: 'array',
      label: 'Rewards',
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          relationTo: 'imageAssets',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
        },
      ],
    },
  ],
}
