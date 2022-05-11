import "./createProjectForm.css";

export default function CreateProjectForm() {
 // TODO : create an onSubmit function, onSubmit => save project detail in state
  return (
    <div className="project-form" data-tag="project-form">
      <h1>Create Project</h1>
      <div className="box">
       <form  >
          <input
            data-tag="pf-name"
            required
            placeholder="Project Name"
          />
          <input  placeholder="key" />
          <textarea                            
            required
            data-tag="pf-description"
            placeholder="Description"
          />
          <input data-tag="pf-lead"  required placeholder="Lead" />
          <input   type="submit" data-tag="pf-submit" />
        </form>
      </div>
    </div>
  );
}
