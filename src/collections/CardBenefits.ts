import type { CollectionConfig } from 'payload'

export const CardBenefits: CollectionConfig = {
  slug: 'card-benefits',
  admin: {
    useAsTitle: 'benefits-type',
    description:
      'Defines the structure of a cards benefits page in the MYCA app. Represents either the Rewards page or the Membership page. Contains an arbitrary number of sections, each containing a list of image tiles.',
  },
  timestamps: false,
  fields: [
    {
      name: 'benefits-type',
      type: 'select',
      label: 'Benefits type',
      options: [
        {
          label: 'Rewards',
          value: 'card-rewards',
        },
        {
          label: 'Membership',
          value: 'card-membership',
        },
      ],
      required: true,
    },
    {
      name: 'benefits-section',
      type: 'array',
      label: 'Section',
      fields: [
        {
          name: 'section-title',
          type: 'text',
          label: 'Section title',
          required: true,
        },
        {
          name: 'tile',
          type: 'array',
          label: 'Tile',
          fields: [
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
              name: 'image',
              type: 'upload',
              label: 'Image',
              relationTo: 'imageAssets',
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
