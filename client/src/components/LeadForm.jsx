import { useState } from "react";
import { addLeads } from "../services/api";

export default function LeadForm({ refresh }) {
  const [names, setNames] = useState("");

  const handleAddLead = () => {
    console.log("Button clicked");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const nameArray = names.split(",").map((n) => n.trim());
    await addLeads(nameArray);
    setNames("");
    refresh();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Add name here"
        value={names}
        onChange={(e) => setNames(e.target.value)}
      />
      <button>Add Leads</button>
    </form>
  );
}
