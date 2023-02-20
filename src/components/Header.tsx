export function Header() {
    return (
        <header className="container h-[75vh] py-32 mx-auto">
            <div className='grid grid-cols-2 gap-8'>
                <div className="bg-blue-900/30 border border-blue-500">

                </div>

                <div className="flex flex-col gap-8">
                    <div>
                        <span className="block text-green-300 font-bold text-8xl mb-4">Hello.</span>
                        <span className="block text-sky-300 text-4xl">I'm João Alves</span>
                    </div>

                    {/* My self introduction */}
                    <div className="p-6 shadow-lg bg-blue-900/50 min-w-[400px] max-w-fit">
                        <code className="text-gray-500 block mb-1">// My self introduction</code>
                        <pre className="text-gray-400">
                            <span className="text-pink-500">Name</span> {`{\n`}
                            <span className="pl-4">First name: <span className="text-sky-500">João Pedro</span>; <br/></span>
                            <span className="pl-4">Last Name: <span className="text-sky-500">Alves</span></span>
                            {`\n}`}
                        </pre>
                    </div>

                    {/* What i do */}
                    <div className="p-6 shadow-lg bg-blue-900/50 max-w-fit translate-x-14">
                        <pre className="text-gray-400">
                            <span className="text-pink-500">What i Do</span> {`{\n`}
                            <span className="pl-4">Profession: <span className="text-sky-500">Full Stack Web Developer</span>; <br/></span>
                            <span className="pl-4">Focus On: <span className="text-sky-500">Frontend</span>; <br/></span>
                            <span className="pl-4">Expert: <span className="text-sky-500">Javascript</span></span>
                            {`\n}`}
                        </pre>
                    </div>
                </div>
            </div>
        </header>
    )
}