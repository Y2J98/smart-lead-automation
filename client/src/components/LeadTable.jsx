export default function LeadTable({ leads }) {
  if (!leads || leads.length === 0) {
    return <p style={{ textAlign: "center" }}>No leads found</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Probability</th>
          <th>Status</th>
          <th>Synced</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <tr key={lead._id}>
            <td>{lead.name}</td>
            <td>{lead.country}</td>
            <td>{lead.probability?.toFixed(2)}</td>
            <td
              className={
                lead.status === "Verified" ? "badge-verified" : "badge-check"
              }
            >
              {lead.status}
            </td>
            <td>{lead.synced ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
