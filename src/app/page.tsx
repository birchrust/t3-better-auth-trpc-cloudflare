import { HydrateClient } from "~/trpc/server";

import { Hello } from "~/components/hello";
import { VisitProtectedPage } from "~/components/visit-protected-page";

export default async function Home() {
	return (
		<HydrateClient>
			<main className="inline-flex min-h-screen w-screen items-center justify-center gap-16 p-8 pb-20 font-[family-name:var(--font-jost)] sm:p-20">
				<div className="w-full max-w-[360px] overflow-hidden rounded-xl border border-[#dddddd] bg-neutral-100 dark:border-[#222222] dark:bg-[#111111]">
					<div className="px-4 py-5">
						<h3 className="mb-2 font-medium text-neutral-700 dark:text-neutral-100">Home Page</h3>
						<Hello />
						<VisitProtectedPage />
					</div>
				</div>
			</main>
		</HydrateClient>
	);
}
