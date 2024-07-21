CREATE TABLE `rumble_linking_code` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`user_id` bigint NOT NULL,
	`linking_code` text,
	CONSTRAINT `rumble_linking_code_id` PRIMARY KEY(`id`),
	CONSTRAINT `rumble_linking_code_linking_code_unique` UNIQUE(`linking_code`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`username` varchar(32),
	`discord_oauth_id` text,
	`rumble_linked` boolean,
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_username_unique` UNIQUE(`username`),
	CONSTRAINT `user_discord_oauth_id_unique` UNIQUE(`discord_oauth_id`)
);
--> statement-breakpoint
ALTER TABLE `rumble_linking_code` ADD CONSTRAINT `rumble_linking_code_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;