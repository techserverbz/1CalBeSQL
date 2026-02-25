CREATE TABLE `users` (
	`id` varchar(24) NOT NULL,
	`actual_created_at` timestamp DEFAULT (now()),
	`name` text,
	`username` text,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`role` enum('user','admin','client') NOT NULL,
	`paths` json,
	`status` varchar(64) DEFAULT 'active',
	`is_disabled` boolean DEFAULT false,
	`phone_country_code` varchar(16),
	`phone_number` varchar(32) NOT NULL,
	`first_name` text,
	`last_name` text,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`),
	CONSTRAINT `users_phone_number_unique` UNIQUE(`phone_number`)
);
--> statement-breakpoint
CREATE TABLE `templates` (
	`id` varchar(24) NOT NULL,
	`pages` json DEFAULT ('[]'),
	`masterinput` json DEFAULT ('[]'),
	`masterinputfromother` json DEFAULT ('[]'),
	`imported_input_sections` json DEFAULT ('[]'),
	`pagesfromother` json DEFAULT ('[]'),
	`inputsections` json DEFAULT ('[]'),
	`dashboards` json DEFAULT ('[]'),
	`name` text,
	`subject` varchar(512) DEFAULT 'No Subject',
	`scheme` text,
	`rulebook` text,
	`description` text,
	`template_id` varchar(24),
	`userid` varchar(24),
	`date` timestamp DEFAULT (now()),
	`tags` json DEFAULT ('[]'),
	`favourites` json DEFAULT ('[]'),
	`likedby` json DEFAULT ('[]'),
	`adminusers` json DEFAULT ('[]'),
	`created_at` timestamp DEFAULT (now()),
	`quotes` json DEFAULT ('[]'),
	`currentversion` varchar(24),
	`publishid` varchar(24),
	`to_publish` boolean DEFAULT false,
	`blogdetails` json,
	`blocks` json,
	`linktohtml` text,
	`is_disabled` boolean DEFAULT false,
	`order` int DEFAULT 0,
	CONSTRAINT `templates_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `versions` (
	`id` varchar(24) NOT NULL,
	`pages` json DEFAULT ('[]'),
	`masterinput` json DEFAULT ('[]'),
	`masterinputfromother` json DEFAULT ('[]'),
	`imported_input_sections` json DEFAULT ('[]'),
	`pagesfromother` json DEFAULT ('[]'),
	`inputsections` json DEFAULT ('[]'),
	`dashboards` json DEFAULT ('[]'),
	`name` text,
	`subject` varchar(512) DEFAULT 'No Subject',
	`scheme` text,
	`rulebook` text,
	`description` text,
	`template_id` varchar(24),
	`date` timestamp DEFAULT (now()),
	`created_at` timestamp DEFAULT (now()),
	`versionof` varchar(24),
	CONSTRAINT `versions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `direct_feasibilities` (
	`id` varchar(24) NOT NULL,
	`template_id` varchar(24) NOT NULL,
	`pages` json DEFAULT ('[]'),
	`masterinput` json DEFAULT ('[]'),
	`name` text,
	`created_at` timestamp DEFAULT (now()),
	`last_modified_at` timestamp,
	`inputsections` json DEFAULT ('[]'),
	`new_pages` json DEFAULT ('{}'),
	`new_masterinput` json DEFAULT ('{}'),
	`new_inputsections` json DEFAULT ('{}'),
	`userid` varchar(24),
	`collaborators` json DEFAULT ('[]'),
	`is_disabled` boolean DEFAULT false,
	`fixedparameterset` boolean DEFAULT false,
	CONSTRAINT `direct_feasibilities_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `contacts` (
	`id` varchar(24) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`name` text,
	`phone` varchar(64),
	`is_disabled` boolean DEFAULT false,
	`email` varchar(256),
	`type` varchar(64),
	`description` text,
	`user` varchar(24),
	`files` json,
	`gst` varchar(64),
	`pan` varchar(64),
	CONSTRAINT `contacts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `about_us` (
	`id` varchar(24) NOT NULL,
	`name` varchar(256) NOT NULL,
	`brief` text NOT NULL,
	`description` text NOT NULL,
	`level` int NOT NULL,
	`photo_url` text,
	`created_at` timestamp DEFAULT (now()),
	`is_disabled` boolean DEFAULT false,
	CONSTRAINT `about_us_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `bills` (
	`id` varchar(24) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`form` json,
	`user` varchar(24),
	`name` varchar(256),
	`client` varchar(24),
	CONSTRAINT `bills_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `pdf_download_logs` (
	`id` varchar(24) NOT NULL,
	`user` varchar(24) NOT NULL,
	`fetch_id` varchar(256) NOT NULL,
	`downloaded_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `pdf_download_logs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `file_templates` (
	`id` varchar(24) NOT NULL,
	`name` varchar(256),
	`type` varchar(64),
	`html` text,
	`input_values` json,
	`date` timestamp DEFAULT (now()),
	CONSTRAINT `file_templates_id` PRIMARY KEY(`id`)
);
