import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

const Queries=()=> {
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState("");


  return (
    <div className="applications-page">
      
      <h2 className="page-title">User Queries</h2>

      <div className="applications-top">

 
        <div className="search-wrapper">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search name, email, mobile or message…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      </div>

      <div className="applications-table-box">
        <table className="applications-table">
          <thead>
            <tr>
              <th>Query ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Loan Type</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>

        </table>
      </div>

    </div>
  );
}
export default Queries;
