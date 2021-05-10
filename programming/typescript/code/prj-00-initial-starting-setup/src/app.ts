
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

type Project = {
  title: string;
  desc: string;
  teamSize: number;
}

let projectStore: Project[] = [];

let evt = {};

//
// Components
//

type RenderFunc = (parent: Node) => void;

const createNodeFromTemplate = (templateSelector: string, onRender?: RenderFunc) => {
  const template = document.querySelector<HTMLTemplateElement>(templateSelector);
  const node = template?.content.cloneNode(true);
  
  if (node == null) {
    throw new Error(`HTML Form with selector[${templateSelector}] not found`);
  }
  
  if (onRender) {
    onRender(node);
  }

  return node;
}



const ProjectForm = (): Node => {
  const form = createNodeFromTemplate("#project-input") as HTMLFormElement;

    document.addEventListener('submit', (event) => {
      event.preventDefault();
      const self = event.target as HTMLElement;

      const newProject: Project = {
        title: (self.querySelector("#title") as HTMLInputElement).value || "",
        desc: (self.querySelector("#description") as HTMLInputElement).value || "",
        teamSize: +((self.querySelector("#people") as HTMLInputElement).value || ""),
      }

      projectStore.push(newProject);
      
      // const h2 = (ProjectList as HTMLElement).getElementsByTagName("h2");
      

      projectStore.forEach( ({title, desc, teamSize}) => {
        ProjectList.appendChild(
          createNodeFromTemplate("#single-project", (node: Node) => {
            node.textContent = `Title: ${title} | Desc: ${desc} | People: ${teamSize}`
          })
        )
      });

      return false;
    });

  return form;
}


const ProjectItem = createNodeFromTemplate("#single-project");
const ProjectList = createNodeFromTemplate("#project-list");


const renderApp = (selector: string, ...components: Node[]): Node => {
  const appNode = document.getElementById(selector);
  
  if (appNode == null) {
    throw new Error(`App node with selector[${selector}] not found`);
  }

  components.forEach( (component) => appNode.appendChild(component));

  return appNode
}


renderApp("app", ProjectForm(), ProjectList);
