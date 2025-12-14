import { useEffect, useState } from "react";
import { getLeads } from "./services/api";
import LeadForm from "./components/LeadForm";
import LeadTable from "./components/LeadTable";

function App() {
  const [leads, setLeads] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchLeads = async () => {
    const res = await getLeads(filter);
    setLeads(res.data);
  };

  useEffect(() => {
    fetchLeads();
  }, [filter]);

  return (
    <div className="container">
      <h2>Smart Lead Automation</h2>

      <LeadForm refresh={fetchLeads} />

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Verified">Verified</option>
        <option value="To Check">To Check</option>
      </select>

      <LeadTable leads={leads} />
    </div>
  );
}

export default App;
