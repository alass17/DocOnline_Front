import { Time } from "@angular/common"
import { Docteur } from "../docteur/docteur"
import { Objet } from "../objet/objet"
import { Patient } from "../patient/patient"

export class RendezVous {
    idrdv!:number
    jour!:any
    heure!:any
    objet!:Objet
    professionnel!:Docteur
    patient!:Patient
}
