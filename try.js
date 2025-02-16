let flipflop = true
class Etudiant {
    constructor(nom, prenom) {
        this.identifiant = Math.floor(Math.random() * 100);
        this.nom = nom
        this.prenom = prenom
        this.matieresSelected = []
        this.MaxMatiere = 2
    }

    infoEtudiant() {
        return `identifiant:${this.identifiant}     prenom: ${this.prenom}      nom:${this.nom}    cours: ${this.matieresSelected}`
    }

    addMatiere(matiere) {
        if (matiere instanceof Cours) {
            if (this.matieresSelected.length < this.MaxMatiere)
                this.matieresSelected.push(matiere.matiere)
        }
    }

}

class Cours {
    constructor(nom, code, MaxStudent) {
        this.subscribe = []
        this.matiere = nom
        this.login = code
        this.MaxStudent = MaxStudent
        this.sdf = []
    }

    mddMaxStuf(zizi) {
        if (zizi instanceof Etudiant) {

        }
    }


    moreStudent(etudiant) {
        if (etudiant instanceof Etudiant) {
            if (this.subscribe.length < this.MaxStudent) {
                if(!etudiant.matieresSelected.includes(this.matiere)){
                this.subscribe.push(etudiant)
                etudiant.addMatiere(this)
                }
            } else {
                console.log(`il ya trop de personne dans le cours de ${this.matiere}`)
            }
        }
        return "ON A DIT UN ELEVE!!!!!"
    }
    showStudent() {
        return this.subscribe
    }
}

let Eva = new Etudiant("court", " Eva")
let Maxim = new Etudiant("panthet", "maxim")
let cours = new Cours("japonais", "tayo", 4)


document.getElementById("fesse").addEventListener("click", () => {
    cours.moreStudent(Eva)
    cours.moreStudent(Maxim)
    console.log(cours.showStudent())
    console.log(Eva.infoEtudiant())

    switch (flipflop) {
        case true:
            document.body.style.backgroundColor = "white"
            break
        case false:
            document.body.style.backgroundColor = "black"

    }
    flipflop = !flipflop
})

