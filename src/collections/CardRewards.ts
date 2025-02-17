import type { CollectionConfig } from 'payload'

export const CardRewards: CollectionConfig = {
  slug: 'card-rewards',
  fields: [
    {
      name: 'card-type',
      type: 'text',
      label: 'Card type',
      required: true,
    },
    {
      name: 'rewards-section',
      type: 'array',
      label: 'Rewards category',
      fields: [
        {
          name: 'category-name',
          type: 'text',
          label: 'Reward category name',
          required: true,
        },
        {
          name: 'tile-list',
          type: 'array',
          label: 'Tile list',
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
    },
  ],
}
