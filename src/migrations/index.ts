import * as migration_20260816_104633_initial from './20260816_104633_initial';

export const migrations = [
  {
    up: migration_20260816_104633_initial.up,
    down: migration_20260816_104633_initial.down,
    name: '20260816_104633_initial'
  },
];
