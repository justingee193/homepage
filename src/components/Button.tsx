export default function Button({ children }) {
    return (
        <div className="flex justify-center pt-4">
            <button className="h-10 px-5 m-2 text-lg transition-colors duration-150 bg-purple-300 hover:bg-purple-400 rounded-lg">
                {children}
            </button>
        </div>
    )
}
