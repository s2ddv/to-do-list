import TaskTable from "./components/TaskTable";

export default function TaskSection({ title, tasks}) { 
    return ( 
        <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold">
                {title} ({tasks.length})
            </h2>

            <TaskTable tasks={tasks} />
        </div>
    );
}