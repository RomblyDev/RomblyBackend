CREATE TABLE `discord_user` (
	`discord_user_id` bigint NOT NULL,
	`discord_display_name` varchar(32) NOT NULL,
	`silly_string` char NOT NULL,
	`last_updated` datetime NOT NULL,
	CONSTRAINT `discord_user_discord_user_id` PRIMARY KEY(`discord_user_id`),
	CONSTRAINT `discord_user_silly_string_unique` UNIQUE(`silly_string`)
);
--> statement-breakpoint
CREATE TABLE `rumble_profile` (
	`buckethead_id` varchar(64) NOT NULL,
	`discord_user_id` bigint,
	`rumble_display_name` varchar(32) NOT NULL,
	`is_oculus` boolean NOT NULL,
	`bp` int NOT NULL DEFAULT 0,
	CONSTRAINT `rumble_profile_buckethead_id` PRIMARY KEY(`buckethead_id`),
	CONSTRAINT `rumble_profile_discord_user_id_unique` UNIQUE(`discord_user_id`)
);
--> statement-breakpoint
ALTER TABLE `rumble_profile` ADD CONSTRAINT `rumble_profile_discord_user_id_discord_user_discord_user_id_fk` FOREIGN KEY (`discord_user_id`) REFERENCES `discord_user`(`discord_user_id`) ON DELETE no action ON UPDATE no action;