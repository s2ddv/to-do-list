import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskSection from "../components/TaskSection";

export default function Dashboard() { 
    return (
    <div className="flex h-screen text-gray-800 bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8 overflow-auto">
        <Header />

        {Object.keys(grouped).map((status) => (
          <TaskSection
            key={status}
            title={status}
            tasks={grouped[status]}
          />
        ))}
      </main>
    </div>
  );
}