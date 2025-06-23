function customrender(reactelement,container){/*

    const domelement=document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.children
    domelement.setattributr('href',reactelement.props.href)
    domelement.setattributr('target',reactelement.props.tsrget)

    container.appendchild(domelement)
    */
   const domelement = document.createElement(reactelement.type)
   domelement.innerHTML = reactelement.children
   for (const prop in reactelement.props) {
    if(prop==children) continue;
    domelement.setattribute(prop,reactelement.props[prop])
   }
   container.appendchild(domelement)
}

const reactelement={
    type:'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
    children:'click me to visitt google'
}


const maincontainer=document.querySelector('#root')
customrender(reactelement,maincontainer)

