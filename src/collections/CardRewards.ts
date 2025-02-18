import type { CollectionConfig } from 'payload'

export const CardRewards: CollectionConfig = {
  slug: 'card-rewards',
  fields: [
    {
      name: 'rewards-section',
      type: 'array',
      label: 'Rewards section',
      fields: [
        {
          name: 'section-name',
          type: 'text',
          label: 'Reward section name',
          required: true,
        },
        {
          name: 'tile',
          type: 'array',
          label: 'Tile',
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
            {
              name: 'card-products',
              type: 'relationship',
              relationTo: 'card-product',
              label: 'Card products',
              hasMany: true,
            },
          ],
        },
      ],
    },
  ],
}
