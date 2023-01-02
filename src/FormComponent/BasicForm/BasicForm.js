import React from "react";

const BasicForm = () => {
  return (
    <div>
      <form>
        <div className="control-group">
          <div className="form-control">
            <label htmlFor="name">First Name</label>
            <input type="text" id="name" />
          </div>
          <div className="form-control">
            <label htmlFor="name">Last Name</label>
            <input type="text" id="name" />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="name">Email</label>
          <input type="text" id="name" />
        </div>
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BasicForm;
