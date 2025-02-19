import type { CollectionConfig } from 'payload'

export const CardType: CollectionConfig = {
  slug: 'card-type',
  admin: {
    useAsTitle: 'card-type-description',
    description: 'Represents a card type e.g. Primary or Supplementary',
  },
  fields: [
    {
      name: 'card-type-name',
      type: 'text',
      label: 'Card type name',
      required: true,
    },
    {
      name: 'card-type-description',
      type: 'text',
      label: 'Card type description',
      required: true,
    },
  ],
}
