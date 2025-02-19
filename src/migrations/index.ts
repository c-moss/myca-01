import * as migration_20250219_041617_migration from './20250219_041617_migration'

export const migrations = [
  {
    up: migration_20250219_041617_migration.up,
    down: migration_20250219_041617_migration.down,
    name: '20250219_041617_migration',
  },
]
