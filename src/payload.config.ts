// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb' // database-adapter-import
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { ImageAssets } from './collections/ImageAssets'
import { CardBenefits } from './collections/amex/CardBenefits'
import { CardType } from './collections/amex/CardType'
import { ProductType } from './collections/amex/ProductType'
import { CardProduct } from './collections/amex/CardProduct'
import { CardStatus } from './collections/amex/CardStatus'
import { FeatureConfiguration } from './collections/amex/FeatureConfiguration'
import { AccountStatus } from './collections/amex/AccountStatus'
import { TermsAndConditions } from './collections/amex/TermsAndConditions'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    ImageAssets,
    CardBenefits,
    CardType,
    ProductType,
    CardProduct,
    CardStatus,
    AccountStatus,
    TermsAndConditions,
  ],
  globals: [FeatureConfiguration],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // database-adapter-config-start
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  // database-adapter-config-end
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
