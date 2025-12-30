function customRender(reactElement,container){

    const domelement=document.createElement(reactElement.type)
    domelement.innerHtml=reactElement.children
    // domelement.setAttribute('href',reactElement.props.href)
    // domelement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domelement)
    for(let prop in reactElement.props){
        if(prop === "children") continue
        domelement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domelement)
}

const reactElement={
    type: 'a',
    props: {
        href:"https://www.google.com",
        target: "_blank"
    },
    children: "Click me"
}

const mainContainer = document.getElementById("root")
customRender(reactElement,mainContainer)

