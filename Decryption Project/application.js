var lettreToAscii = function(lettre){
	/*permet de convertir une lettre en nombre via la table ASCII
	prm : caractère */
		return lettre.charCodeAt(0);}

var AsciiToLettre = function(nombre_lettre){
	/*permet de convertir un nombre en lettre via la table ASCII
	prm : nombre */
		return String.fromCharCode(nombre_lettre);}

var chiffrement = function(text, décalage){
	/*permet de crypter un texte d'après le chiffrement de césar
	prm : text pour le contenu de la balise
	décalage : la clé pour chiffrer le contenu*/
	texte_chiffré = ""
	for (var i = 0; i <= text.length-1; i++) {
		texte_chiffré += AsciiToLettre(lettreToAscii(text[i])+décalage);
	}
	return texte_chiffré;}

var dechiffrement = function(text, décalage){
	/*permet de decrypter un texte d'après le chiffrement de césar
	prm : text pour le contenu de la balise
	décalage : la clé pour chiffrer le contenu*/
	return chiffrement(chiffrement(text, décalage), -décalage);}

var effet_dechiffrement = function(element, text_c, text_d){
	/*permet de chiffrer et déchiffrer un text
	prm : 
	text_c : le texte chiffré 
	text_d : le texte déchiffré*/
	var tableau_chiffré = []
	var tableau_déchiffré = []
	temps = (1/(text_c.length)*3000);

	for (var i = 0; i < text_c.length; i++) {
		tableau_chiffré.push(text_c[i])}

	for (var i = 0; i < text_c.length; i++) {
		tableau_déchiffré.push(text_d[i])}

	i=0
	setInterval(function(){
		if (i < tableau_chiffré.length){
			tableau_chiffré[i]=tableau_déchiffré[i]
			element.textContent = tableau_chiffré.join('')
			i++
		}
	}, temps);

	return temps

}

//pour faire l'effet de défilement
m = 0
const ratio = .1
const options = {
	root: null,
	rootMargin: '0px',
	threshold: ratio
}

const handleIntersect = function(entries, observer){
	entries.forEach(function (entry){
		let truc = document.querySelectorAll('[class*="reveal-"]')
		if (entry.intersectionRatio > ratio && m<truc.length) {
			test = truc[m]  
			texte = test.textContent
			décalage = 5
			test.textContent = chiffrement(texte, décalage)
			entry.target.classList.add('reveal-visible')
			effet_dechiffrement(test, chiffrement(texte, décalage), dechiffrement(texte, décalage))
			m++
		}
	})
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function (r){
	observer.observe(r)
});