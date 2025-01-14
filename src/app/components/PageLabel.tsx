export default function PageLabel({ text }: { text: string }) {
    return (
        <section className="">
            <div className="h-32 sm:h-32 px-6 sm:px-20 lg:px-36 bg-vp flex items-center text-white text-4xl sm:text-5xl font-bold">
                {text}
            </div>
        </section>
    );
}