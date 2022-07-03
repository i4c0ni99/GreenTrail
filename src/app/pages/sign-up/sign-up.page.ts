import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import 'firebase/firestore';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.page.html',
    styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
    createUserForm: FormGroup;


    constructor(private router: Router,
                private fb: FormBuilder,
               private fireStore: AngularFirestore,

                ) {

        this.createUserForm = fb.group({
            nome: [this.router.getCurrentNavigation().extras.state.name,Validators.required],
            cognome: [this.router.getCurrentNavigation().extras.state.surname,Validators.required],
            email: [this.router.getCurrentNavigation().extras.state.email,Validators.required],

        })
    }

createUser(
        name: String,
        surname: String,
        email: String,

    ):Promise<void > {
         console.log(name)
        const id = this.fireStore.createId();
         return this.fireStore.collection('utenti').doc(id).set({
            id,
            name,
            surname,
            email,


        })
    }

    ngOnInit() {
    }

}
