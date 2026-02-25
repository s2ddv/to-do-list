export default function Header() { 
    return (
        <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Product Backlog</h1>
            <button className="px-4 py-2 text-white transition duration-200 bg-blue-600 rounded-lg shadow hover:bg-blue-700">
                + Add Task
            </button>
        </div>
    );
}