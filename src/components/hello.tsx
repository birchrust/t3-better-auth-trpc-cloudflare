import { api } from "~/trpc/server";

export const Hello = async () => {
	const text = "Only logged in users can see this page.";
	const hello = await api.contents.hello({ text });

	void api.contents.hello.prefetch({ text });

	return <p className="mt-2 text-[15px] text-neutral-500 dark:text-neutral-400">{hello.text}</p>;
};
