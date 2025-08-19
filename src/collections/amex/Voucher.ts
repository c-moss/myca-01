import type { CollectionConfig } from 'payload'

export const Voucher: CollectionConfig = {
  slug: 'voucher',
  admin: {
    useAsTitle: 'voucherName',
    description: 'Represents a 3rd-party voucher product that can be purchased with Amex points.',
    group: 'Amex',
  },
  timestamps: false,
  fields: [
    {
      name: 'id',
      type: 'text',
      label: 'Voucher ID',
      required: true,
      admin: {
        description:
          'Voucher code should match the identifier specific by FVI / Voucher Management System.',
      },
    },
    {
      name: 'voucherName',
      type: 'text',
      label: 'Voucher name',
      required: true,
      admin: {
        description:
          'Name of the voucher product. This should be the name that is displayed to the user in the app.',
      },
    },
    {
      name: 'productDescription',
      type: 'textarea',
      label: 'Product description',
      required: true,
    },
    {
      name: 'deliveryDetails',
      type: 'textarea',
      label: 'Delivery details',
      required: true,
    },
    {
      name: 'termsAndConditions',
      type: 'textarea',
      label: 'Terms and conditions',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'imageAssets',
      required: true,
    },
  ],
}
