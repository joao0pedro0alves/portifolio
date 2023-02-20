import { Header } from "./components/Header"
import { Experience } from "./components/Experience"

export function App() {
    return (
        <main className="w-full container px-4 sm:px-0 mx-auto py-16">
            <Header />

            {/* BIO */}
            <section className="sm:grid sm:grid-cols-2 mb-16">
                <div className="flex flex-col">
                    <span className="block text-6xl font-bold text-green-300 mb-1">#03</span>
                    <span className="block text-6xl font-light text-sky-300 mb-4">
                        Years<span className="text-green-300 font-semibold">;</span>
                    </span>
                    <p className="text-lg text-gray-300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Mollitia amet, dolores dolorem accusamus in accusantium
                        maxime officiis. Iste, optio rem? Perspiciatis cumque sequi
                        quaerat similique beatae blanditiis, asperiores quo nemo!
                    </p>
                </div>
            </section>

            {/* EXPERIENCE */}
            <section className="mb-16">
                <h2 className="font-semibold text-green-300 text-5xl mb-8">Minhas experiências</h2>
                <Experience />
            </section>

            {/* SKILLS */}

            {/* PROJETOS */}

            {/* CONTATO */}
        </main>
    )
}
