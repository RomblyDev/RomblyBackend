import {
  index,
  int,
  mysqlTable,
  bigint,
  text,
  varchar,
  boolean
} from 'drizzle-orm/mysql-core';

export const users = mysqlTable('user', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  username: varchar('username', { length: 32 }).unique(),
  discordOAuthId: text('discord_oauth_id').unique(),
  rumbleLinked: boolean('rumble_linked')
});

export const rumbleLinkingCodes = mysqlTable('rumble_linking_code', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  userId: bigint('user_id', { mode: 'number' })
    .references(() => users.id).notNull(),
  linkingCode: text('linking_code').unique()
});