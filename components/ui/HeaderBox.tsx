export default function HeaderBox({ type = 'title', title, subtext, user }: HeaderBoxProps) {
    return (
        <div className="mx-auto max-w-2xl sm:text-center">
            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
                {title}
                {type === 'greeting' && <span>&nbsp;{user}</span>}
            </h1>
            <p>{subtext}</p>
        </div>
    );
}