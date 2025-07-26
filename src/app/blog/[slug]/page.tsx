export default async function Blog({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params;
	const { default: Post } = await import(`@/content/${slug}.mdx`);

	return <Post /> // TODO: Use the new navbar once available
}

export function generateStaticParams() {
	return [{ slug: 'welcome' }, { slug: 'about' }]
}

export const dynamicParams = false;
