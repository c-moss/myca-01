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
        name: 'thumbnail',
        width: 50,
        height: 50,
        position: 'centre',
      },
      {
        name: 'tile',
        width: 150,
        height: 150,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
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
