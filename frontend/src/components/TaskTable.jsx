export default function TaskTable({ tasks }) {
  return (
    <div className="overflow-hidden bg-white shadow rounded-xl">
      <table className="w-full text-sm">
        <thead className="text-gray-500 bg-gray-50">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Start Date</th>
            <th className="p-4 text-left">Due Date</th>
            <th className="p-4 text-left">Priority</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              className="transition border-t hover:bg-gray-50"
            >
              <td className="p-4">{task.title}</td>
              <td className="p-4">{task.start}</td>
              <td className="p-4">{task.due}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    task.priority === "High"
                      ? "bg-red-100 text-red-600"
                      : task.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {task.priority}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}