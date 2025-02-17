import type { CollectionConfig } from 'payload'

export const ImageAssets: CollectionConfig = {
  slug: 'imageAssets',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'tile',
        width: 150,
        height: 150,
        position: 'centre',
      },
    ],
    adminThumbnail: 'tile',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'imageAltText',
      type: 'text',
      required: true,
    },
  ],
}
