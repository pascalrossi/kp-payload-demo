import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`pages_blocks_services_grid_services\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`cta_label\` text,
  	\`cta_url\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_services_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_services_grid_services_order_idx\` ON \`pages_blocks_services_grid_services\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_services_grid_services_parent_id_idx\` ON \`pages_blocks_services_grid_services\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_services_grid_services_locale_idx\` ON \`pages_blocks_services_grid_services\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_services_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`section_label\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_services_grid_order_idx\` ON \`pages_blocks_services_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_services_grid_parent_id_idx\` ON \`pages_blocks_services_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_services_grid_path_idx\` ON \`pages_blocks_services_grid\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_services_grid_locale_idx\` ON \`pages_blocks_services_grid\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_philosophy_section\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text,
  	\`title\` text,
  	\`body\` text,
  	\`video_url\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_philosophy_section_order_idx\` ON \`pages_blocks_philosophy_section\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_philosophy_section_parent_id_idx\` ON \`pages_blocks_philosophy_section\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_philosophy_section_path_idx\` ON \`pages_blocks_philosophy_section\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_philosophy_section_locale_idx\` ON \`pages_blocks_philosophy_section\` (\`_locale\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`pages_blocks_services_grid_services\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_services_grid\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_philosophy_section\`;`)
}
