import type { CollectionConfig } from 'payload'

export const LinksPage: CollectionConfig = {
  slug: 'links-page',
  admin: {
    useAsTitle: 'page-name',
    description:
      'Defines the structure of a links page in the MYCA app. Contains an arbitrary number of sections, each containing a list of links.',
    group: 'Amex',
  },
  timestamps: false,
  fields: [
    {
      name: 'page-name',
      type: 'text',
      label: 'Page Name',
      required: true,
    },
    {
      name: 'links-section',
      type: 'array',
      label: 'Section',
      fields: [
        {
          name: 'section-title',
          type: 'text',
          label: 'Section title',
          required: false,
        },
        { name: 'section-url', type: 'text', label: 'Section URL', required: false },
        {
          name: 'links',
          type: 'array',
          label: 'Links',
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
          ],
        },
      ],
    },
  ],
}
