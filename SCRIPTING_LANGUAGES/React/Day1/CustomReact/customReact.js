function customRender(reactElement,container){

    const domelement=document.createElement(reactElement.type)
    domelement.innerHTML=reactElement.children
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
    children: "Click me",
}

const mainContainer = document.getElementById("root")
customRender(reactElement,mainContainer)


// and you can say its simple html thing but now actual react is same as simple html thing in react we react.creatElement same as creat element obj for making element and render for rendering. now go back main js in day1 folder and see.
