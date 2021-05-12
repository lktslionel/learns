
import * as Interfaces from "./interfaces/project"


declare var window: any // Tells typescript to not worry about this var define externally
//
// Templates 
//

// let  templates:{ [key: string]: HTMLTemplateElement | null; } = {};

// templates["project-input"]  = document.querySelector<HTMLTemplateElement>("#project-input");
// templates["single-project"] = document.querySelector<HTMLTemplateElement>("#single-project");
// templates["project-list"]   = document.querySelector<HTMLTemplateElement>("#project-list");


// const formFragment = templates["project-input"]?.content.cloneNode(true);
// const proformFragment = templates["project-input"]?.content.cloneNode(true);


//
// Store
//
// namespace ProjectInterfaces {


  let projectStore = new Set<Interfaces.Project>()


  //
  // Components
  //


  const createNodeFromTemplate = (templateSelector: string): Element => {
    const template = document.querySelector<HTMLTemplateElement>(templateSelector)!;
    // const node = 
    
    const node = document.importNode(template.content, true).firstElementChild
    
    // {@hint We don't need this check because we used '!' which tells TS that we are sure that the element exist on the page}
    //
    if (node == null) {
      throw new Error(`HTML Form with selector[${templateSelector}] not found`);
    }
    return node;
  }


  const ProjectForm = createNodeFromTemplate("#project-input")
  ProjectForm.id = 'user-input'

  const ProjectList = createNodeFromTemplate("#project-list");
  const projectListTitle = ProjectList.getElementsByTagName("h2").item(0) as HTMLHeadingElement;
  projectListTitle.textContent = "Projects"

  const projectListContainer = ProjectList.getElementsByTagName("ul").item(0) as HTMLUListElement;

  const ProjectItemTemplate = document.querySelector<HTMLTemplateElement>("#single-project")!;




  ProjectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const self = event.target as HTMLElement;

    const newProject: Interfaces.Project = {
      title: (self.querySelector("#title") as HTMLInputElement).value,
      desc: (self.querySelector("#description") as HTMLInputElement).value,
      teamSize: +((self.querySelector("#people") as HTMLInputElement).value),
    }

    projectStore.add(newProject);


    console.log(projectStore)
    
    window.projectStore = projectStore

      // const h2 = (ProjectList as HTMLElement).getElementsByTagName("h2");
      

      // projectStore.forEach( ({title, desc, teamSize}) => {
      const projectItem = document.importNode(ProjectItemTemplate.content, true).firstElementChild
        
      if (projectItem) {
        projectItem.textContent = `Title: ${newProject.title} | Desc: ${newProject.desc} | People: ${newProject.teamSize}`
        projectListContainer.appendChild(projectItem)
      }


    return false;
  });




  const renderApp = (selector: string, ...components: Node[]): Node => {
    const appNode = document.getElementById(selector);
    
    if (appNode == null) {
      throw new Error(`App node with selector[${selector}] not found`);
    }

    components.forEach( (component) => appNode.appendChild(component));

    return appNode
  }


  renderApp("app", ProjectForm, ProjectList);
// }