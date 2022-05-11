import "./issue-form.css";


export default function IssueForm() {
 
  const onSubmit = (data) => {
              //TODO : Add Issue  to state array, set status => todo initially,  
              // TODO : After adding Close this PopUp 
  };

  return (
    <div className="issue-form-container" data-tag="form-container">
      <h1>Create Issue</h1>
      <div className="boxx">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-text">Summary</div>

          <input
            data-tag="if-summary"
            placeholder="Summary"
          />
          <div 
         
          className="form-text">Description</div>

          <textarea
            data-tag="if-description"
         
            required
            placeholder="Description"
          />
          <div className="form-text">Issue Type</div>
            <select > 
            <option value="A">Story</option>
            <option value="B">Task</option>
            <option value="C">Bug</option>
            <option value="D">Epic</option>
          </select>

          <input
            data-tag="assigned_to"
            required
            placeholder="Assigned To"
          />
          <input type="submit" data-tag="if-submit" />
          <button 
          // onClick={() => setExpanded(false)}  TODO : close the form POPUP 
          > Cancel </button>
        </form>
      </div>
    </div>
  );
}
