import { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-mongodb'

export async function up({ payload, req, session }: MigrateUpArgs): Promise<void> {
  await payload.delete({
    collection: 'card-type',
    where: { id: { exists: true } },
  })
  await payload.delete({
    collection: 'product-type',
    where: { id: { exists: true } },
  })
  await payload.delete({
    collection: 'card-product',
    where: { id: { exists: true } },
  })
}

export async function down({ payload, req, session }: MigrateDownArgs): Promise<void> {
  // Migration code
}
