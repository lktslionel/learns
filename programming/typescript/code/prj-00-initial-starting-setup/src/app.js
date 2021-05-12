//
// Templates 
//
var projectStore = new Set();
//
// Components
//
var createNodeFromTemplate = function (templateSelector) {
    var template = document.querySelector(templateSelector);
    // const node = 
    var node = document.importNode(template.content, true).firstElementChild;
    // {@hint We don't need this check because we used '!' which tells TS that we are sure that the element exist on the page}
    //
    // if (node == null) {
    //   throw new Error(`HTML Form with selector[${templateSelector}] not found`);
    // }
    return node;
};
var ProjectForm = createNodeFromTemplate("#project-input");
ProjectForm.id = 'user-input';
var ProjectList = createNodeFromTemplate("#project-list");
var projectListTitle = ProjectList.getElementsByTagName("h2").item(0);
projectListTitle.textContent = "Projects";
var projectListContainer = ProjectList.getElementsByTagName("ul").item(0);
var ProjectItemTemplate = document.querySelector("#single-project");
ProjectForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var self = event.target;
    var newProject = {
        title: self.querySelector("#title").value,
        desc: self.querySelector("#description").value,
        teamSize: +(self.querySelector("#people").value)
    };
    projectStore.add(newProject);
    console.log(projectStore);
    // const h2 = (ProjectList as HTMLElement).getElementsByTagName("h2");
    // projectStore.forEach( ({title, desc, teamSize}) => {
    var projectItem = document.importNode(ProjectItemTemplate.content, true).firstElementChild;
    if (projectItem) {
        projectItem.textContent = "Title: " + newProject.title + " | Desc: " + newProject.desc + " | People: " + newProject.teamSize;
        projectListContainer.appendChild(projectItem);
    }
    return false;
});
var renderApp = function (selector) {
    var components = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        components[_i - 1] = arguments[_i];
    }
    var appNode = document.getElementById(selector);
    if (appNode == null) {
        throw new Error("App node with selector[" + selector + "] not found");
    }
    components.forEach(function (component) { return appNode.appendChild(component); });
    return appNode;
};
renderApp("app", ProjectForm, ProjectList);
