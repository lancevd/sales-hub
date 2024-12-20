// pages/index.js
import FocusedView from "../../components/Dashboard/FocusedView";
import KeyActivities from "../../components/Dashboard/KeyActivities";
import LeadList from "../../components/Dashboard/LeadList";

export default function Leads() {
  return (
    <div className="flex h-screen">
      <main className="flex-1 bg-gray-200 p-4 overflow-auto">
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="col-span-2">
            <FocusedView />
            <LeadList />
          </div>
          <KeyActivities />
        </div>
      </main>
    </div>
  );
}
