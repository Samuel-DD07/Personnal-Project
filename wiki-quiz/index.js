let ElementDefinition = document.querySelector("b").parentElement
let textDefinition = ElementDefinition.innerText
let nomDefinition = document.querySelector("h1")

let body = document.querySelector("body")
let div = document.querySelector("div")

div = div.remove()

let definition = document.createElement("p")
definition.innerText = textDefinition

body.appendChild(definition)