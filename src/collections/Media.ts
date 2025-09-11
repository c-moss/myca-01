import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: () => true,
    delete: () => true,
    read: () => true,
    update: () => true,
  },
  admin: {
    description:
      'The Media Collection lets you easily track, manage and reuse image assets within your organization.',
  },
  timestamps: false,
  upload: {
    mimeTypes: ['image/png', 'image/webp', 'application/pdf'],
  },
  fields: [
    {
      name: 'meta',
      type: 'group',
      label: 'Meta Data',
      fields: [
        {
          name: 'alt',
          label: 'Alt',
          type: 'text',
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
  ],
}
