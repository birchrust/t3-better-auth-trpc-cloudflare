import { db } from "~/server/db";
import { betterAuth } from "better-auth";
import { bearer } from "better-auth/plugins";
import { anonymous } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { env } from "~/env";

export const auth = betterAuth({
	baseURL: env.NEXT_PUBLIC_BETTER_AUTH_URL,
	rateLimit: {
		window: 3,
		max: 50,
	},
	database: drizzleAdapter(db, {
		provider: "pg",
	}),
	session: {
		expiresIn: 60 * 60 * 24 * 7,
		cookieCache:{
			enabled: true,
			maxAge: 60, // Cache duration in seconds
		}
	},

	plugins: [nextCookies(), bearer(), anonymous()],
});
