const Settings = () => {
  return (
    <div className="page">
      <h2>System Settings</h2>

      {/* Admin Profile */}
      <div className="panel">
        <h3>OPS Admin Profile</h3>

        <div className="settings-grid">
          <div>
            <label>Admin Name</label>
            <input type="text" value="OPS Manager" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" value="ops@loanops.com" />
          </div>

          <div>
            <label>Contact</label>
            <input type="text" value="+91 98765 43210" />
          </div>
        </div>

        <button className="save-btn">Save Changes</button>
      </div>

      {/* System Controls */}
      <div className="panel">
        <h3>System Controls</h3>

        <div className="settings-list">
          <div className="setting-item">
            <span>Auto-assign lender to applications</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="setting-item">
            <span>Allow DSAs to submit applications</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="setting-item">
            <span>Enable loan approval notifications</span>
            <input type="checkbox" />
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="panel danger-zone">
        <h3>Danger Zone</h3>
        <button className="danger-btn">Reset All Application Data</button>
      </div>
    </div>
  );
};

export default Settings;
