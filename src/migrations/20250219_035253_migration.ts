import { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-mongodb'

export async function up({ payload, req, session }: MigrateUpArgs): Promise<void> {
  payload.db.collections['product-type'].deleteMany({})
  payload.db.collections['card-type'].deleteMany({})
  payload.db.collections['card-product'].deleteMany({})
  // Migration code
}

export async function down({ payload, req, session }: MigrateDownArgs): Promise<void> {
  // Migration code
}
