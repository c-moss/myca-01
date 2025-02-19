import * as migration_20250219_035253_migration from './20250219_035253_migration';

export const migrations = [
  {
    up: migration_20250219_035253_migration.up,
    down: migration_20250219_035253_migration.down,
    name: '20250219_035253_migration'
  },
];
