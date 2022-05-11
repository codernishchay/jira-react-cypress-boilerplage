# Jira React Cypress

Create a jira like issue tracker, 

Required Blocks 

```jsx
Appbar 
Create Project form
Header
Issue Card
Expanded Issue Card
Create Issue form
```

```jsx
Project : {name, lead , description}
Issue : {description, assigned-to, summary, issue-type, issue-status }
Issue Types : {Story, Bug, Task}
Issue Status : { Todo:  , Done, Blocked, In-progress }

Appbar : Project name,

Create Project form : take project details input. 

Header : show project name, add search box and Create issue button 

Create Issue form : take Issue details, set default value { status : TODO } 

Search box : should seach onChange, without search button, to search issues

Issue Card : show issue summary, type and lead. add onClick()=> show expanded card

Expanded Issue card : show issue details, project details. add a dropdown to change the status of issue {must use <select>, <option> for it. }

Drop-Down : in Expanded Issue Card, onChange() of status of issue, the issue card should move to that Issue Section
{ 
                  <option value={"A"}>TO DO</option>
                  <option value={"B"}>In Progress</option>
                  <option value={"C"}>Done</option>
                  <option value={"D"}>Blocked</option>
 } 

Issue Section : Issue Cards to be devided into 4 section of status : {Todo , inProgress, Done, Blocked }

```

Data attributes are like data-\* , we can put anything after dash, to uniquely identify html elements like id.

```
<!-- They don't need a value -->
<div data-tag></div>

<!-- ...but they can have a value -->
<div data-tag="large"></div>
<div data-tag="navbar"></div>

```

### Some attributes to be used for this assignment

| Component / Element      | data-tag            |
| ------------------------ | ------------------- |
| Top Nav Bar              | navbar              |
| Create Project Form             | project-form |  
| Project Form Description Input   | pf-description |
| Project From Lead Input   | pf-lead         |              
| Project Form Project Name Input      | pf-name   |   
| Project Form Submit Button       | pf-submit     |
| Header Component     | header      |  
| Create Issue Button     | create-issue      |                
| Create Issue Form  Div   |  form-container      |                
| Issue form Description Input  | if-description   |              
| Issue form Assigned To Input  | assigned_to         |                
| Issue form Summary Input    |  if-summary          |             
| Issue form Submit  Button   |  if-submit          |               
| Search Box | search-box | 
| Issue Card | card-container | 
| Expanded Issue Card | expanded-card | 
| Expanded Issue Card Drop-down | drop-down| 

### Test File : jira-react.spec.js

### To run tests :

```
     npx cypress open

```