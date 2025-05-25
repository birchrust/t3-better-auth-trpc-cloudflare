import Link from "next/link";

export default function ProtectedPage() {
	return (
		<main className="inline-flex min-h-screen w-full items-center justify-center font-[family-name:var(--font-jost)]">
			<div className="w-full max-w-[360px] overflow-hidden rounded-xl border border-[#dddddd] bg-neutral-100 dark:border-[#222222] dark:bg-[#111111]">
				<div className="px-4 py-5">
					<h3 className="mb-2 font-medium text-neutral-700 dark:text-neutral-100">Protected Page</h3>
					<p className="mt-2 text-[15px] text-neutral-500 dark:text-neutral-400">
						Only logged in users can see this page.
					</p>
					<div className="mt-2 mr-4 inline-flex w-full justify-end">
						<Link
							href="/"
							className="cursor-pointer rounded-xl border border-neutral-300 bg-neutral-100 px-4 py-0.5 font-semibold dark:border-[#222222] dark:bg-[#111111]"
						>
							Back
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
