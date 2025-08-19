import type { CollectionConfig } from 'payload'

export const CardBenefits: CollectionConfig = {
  slug: 'card-benefits',
  admin: {
    useAsTitle: 'benefitsType',
    description:
      'Defines the structure of a cards benefits page in the MYCA app. Represents either the Rewards page or the Membership page. Contains an arbitrary number of sections, each containing a list of image tiles.',
    group: 'Amex',
  },
  timestamps: false,
  fields: [
    {
      name: 'benefitsType',
      type: 'select',
      label: 'Benefits type',
      options: [
        {
          label: 'Rewards',
          value: 'cardRewards',
        },
        {
          label: 'Membership',
          value: 'cardMembership',
        },
      ],
      required: true,
    },
    {
      name: 'benefitsSection',
      type: 'array',
      label: 'Section',
      fields: [
        {
          name: 'sectionTitle',
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
              name: 'cardProducts',
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
