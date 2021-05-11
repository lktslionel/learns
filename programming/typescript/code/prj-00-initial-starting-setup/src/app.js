"use strict";
//
// Templates 
//
let projectStore = [];
let evt = {};
const createNodeFromTemplate = (templateSelector, onRender) => {
    const template = document.querySelector(templateSelector);
    const node = template === null || template === void 0 ? void 0 : template.content.cloneNode(true);
    if (node == null) {
        throw new Error(`HTML Form with selector[${templateSelector}] not found`);
    }
    if (onRender) {
        onRender(node);
    }
    return node;
};
const ProjectForm = () => {
    const form = createNodeFromTemplate("#project-input");
    document.addEventListener('submit', (event) => {
        event.preventDefault();
        const self = event.target;
        const newProject = {
            title: self.querySelector("#title").value || "",
            desc: self.querySelector("#description").value || "",
            teamSize: +(self.querySelector("#people").value || ""),
        };
        projectStore.push(newProject);
        // const h2 = (ProjectList as HTMLElement).getElementsByTagName("h2");
        projectStore.forEach(({ title, desc, teamSize }) => {
            ProjectList.appendChild(createNodeFromTemplate("#single-project", (node) => {
                node.textContent = `Title: ${title} | Desc: ${desc} | People: ${teamSize}`;
            }));
        });
        return false;
    });
    return form;
};
const ProjectItem = createNodeFromTemplate("#single-project");
const ProjectList = createNodeFromTemplate("#project-list");
const renderApp = (selector, ...components) => {
    const appNode = document.getElementById(selector);
    if (appNode == null) {
        throw new Error(`App node with selector[${selector}] not found`);
    }
    components.forEach((component) => appNode.appendChild(component));
    return appNode;
};
renderApp("app", ProjectForm(), ProjectList);
