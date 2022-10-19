window.onload = function() {
    const comprasList: HTMLElement = document.getElementById("compras")!
    const newElementContent: string = "Carne"
    const newElement: HTMLElement = document.createElement("li")
    newElement.innerHTML = newElementContent
    comprasList.appendChild(newElement)

    document.getElementById("wolf_img")?.setAttribute("src", "https://www.caracteristicas.co/wp-content/uploads/2018/09/lobo-1-e1580435761506.jpg")

}
