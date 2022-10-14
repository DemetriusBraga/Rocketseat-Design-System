import './styles/global.css';

export function App() {
    return (
        <div className="m-2">
            <h1 className="text-2xl font-bold text-gray-800">Hello World</h1>

            <button className="bg-cyan-500 font-medium border rounded px-4 py-1 text-gray-800 hover:bg-cyan-300">
                Enviar
            </button>
        </div>
    );
}
