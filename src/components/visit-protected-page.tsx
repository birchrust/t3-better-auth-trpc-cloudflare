"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { signIn, useSession } from "~/server/auth/auth-client";

export const VisitProtectedPage = () => {
	const router = useRouter();
	const { data: session } = useSession();

	const [isLoading, setIsLoading] = useState(false);

	const handleClick = async () => {
		setIsLoading(true);
		try {
			if (session?.user) {
				router.push("/protected");
				return;
			}

			void (await signIn.anonymous({
				fetchOptions: {
					onSuccess: () => {
						router.push("/protected");
					},
				},
			}));
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className="inline-flex w-full justify-end">
			<button
				disabled={isLoading}
				type="button"
				className="mt-2 cursor-pointer rounded-xl border border-neutral-300 bg-neutral-100 px-4 py-0.5 font-semibold dark:border-[#222222] dark:bg-[#111111]"
				onClick={handleClick}
			>
				{isLoading ? "Loading..." : "Visit Protected Page"}
			</button>
		</div>
	);
};
