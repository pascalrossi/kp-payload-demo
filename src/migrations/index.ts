import * as migration_20260816_104633_initial from './20260816_104633_initial';
import * as migration_20260816_142422_add_services_philosophy from './20260816_142422_add_services_philosophy';

export const migrations = [
  {
    up: migration_20260816_104633_initial.up,
    down: migration_20260816_104633_initial.down,
    name: '20260816_104633_initial',
  },
  {
    up: migration_20260816_142422_add_services_philosophy.up,
    down: migration_20260816_142422_add_services_philosophy.down,
    name: '20260816_142422_add_services_philosophy'
  },
];
