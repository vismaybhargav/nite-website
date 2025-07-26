interface BlogCalloutProps {
    title: string,
    description: string,
    date: string,
}

export default function BlogCallout(props: BlogCalloutProps) {
    return (
        <div className="border rounded-2xl p-2 max-w-[300px]">
            <h1 className="text-black text-3xl">{props.title}</h1>
            <h3 className="text-gray-700 text-2xl mt-20">{props.description}</h3>
            <h4 className="text-gray-700 text-2xl">{props.date.toString()}</h4>
        </div>
    )
}
