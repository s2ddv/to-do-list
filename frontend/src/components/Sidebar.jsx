export default function Sidebar() {
    return (
        <aside className="hidden w-64 p-6 bg-white shadow-md md:block">
            <h2 className="mb-6 font-bold text-x1">Atos Group</h2>

            <nav className="space-y-3">
                <div className="font-medium text-gray-500">Menu</div>
                <a className="block cursor-pointer hover:text-blue-600">Home</a>
                <a className="block cursor-pointer hover:text-blue-600">Inbox</a>
                <a className="block cursor-pointer hover:text-blue-600">Roadmaps</a>
            </nav>

            <div className="mt-8">
                <div className="mb-3 font-medium text-gray-500">Projects</div>
                <div className="p-2 text-blue-600 rounded-lg bg-blue-50">Product Backlog</div>
            </div>
        </aside>
    );
}