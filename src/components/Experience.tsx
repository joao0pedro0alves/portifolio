import { Atom } from "phosphor-react"

export function Experience() {
    return (
        <ul className="w-full flex flex-col gap-2">
            <li className="p-6 shadow-lg bg-blue-500 flex justify-between gap-4 items-center">
                <div className="col-span-3 flex flex-col">
                    <strong className="text-lg">Programador Web</strong>
                    <span className="text-green-300 mb-1">Ecosis - Tempo integral</span>
                    <span className="text-gray-200 text-sm">ago de 2020 - o momento - 2 anos 7 meses</span>
                </div>
                <Atom
                    className="text-blue-900/50" 
                    size={60}
                />
            </li>

            <li className="p-6 shadow-lg bg-blue-500 flex justify-between gap-4 items-center">
                <div className="col-span-3 flex flex-col">
                    <strong className="text-lg">Auxiliar adimistrativo</strong>
                    <span className="text-green-300 mb-1">Grupo Rocha - Terceirizado</span>
                    <span className="text-gray-200 text-sm">nov de 2018 - ago de 2020 - 1 anos 10 meses</span>
                </div>
                <Atom
                    className="text-blue-900/50" 
                    size={60}
                />
            </li>
        </ul>
    )
}
