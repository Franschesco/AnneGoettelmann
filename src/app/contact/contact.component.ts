import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import emailjs, {send} from '@emailjs/browser';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit{
  @ViewChild('contact', { static: true }) detailsElement!: ElementRef;

  private textToWrite = 'Prenons rendez-vous !';
  private currentIndex = 0;
  private isDeleting = false;
  private typingSpeed = 75; // Vitesse de frappe en millisecondes
  private pauseDuration = 3000; // Durée de la pause en millisecondes après écriture complète

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Anne',
    from_email: new FormControl('', [Validators.required, Validators.pattern(".+@.+\\..+")]),
    subject: '',
    message: '',
  });
  constructor(
    private el: ElementRef,
    private fb: FormBuilder,
    private appComponent: AppComponent,
  ) {}

  ngOnInit() {
    this.typeEffect();
  }

  mail_box_class_to_return() {
    if (this.appComponent.screenWidth < 1085) {
      return ('contact_right_panel_little');
    } else {
      return ('contact_right_panel');
    }
  }

  the_mail_box_class_to_return() {
    if (this.appComponent.screenWidth < 585) {
      return ('mail_box_little');
    } else {
      return ('mail_box');
    }
  }

  contact_container_class_to_return() {
    if (this.appComponent.screenWidth < 1085) {
      return ('contact_container_little');
    } else {
      return ('contact_container');
    }
  }

  maps_class_return() {
    if (this.appComponent.screenWidth < 1085) {
      return ('right_map_container_little');
    } else {
      return ('right_map_container_big');
    }
  }

  pictures_maps_container() {
    if (this.appComponent.screenWidth > 1085) {
      return ('left_map_container_big');
    } else if (this.appComponent.screenWidth > 550){
      return ('left_map_container_medium');
    } else {
      return ('left_map_container_little');
    }
  }

  map_container_class_return() {
    if (this.appComponent.screenWidth > 1085) {
      return ('map_container_big');
    } else if (this.appComponent.screenWidth > 550) {
      return ('map_container_medium');
    } else {
      return ('map_container_little');
    }
  }
  async send() {
    emailjs.init('Q4_BlQaZYJATG7VKY');
    const emailPattern = /.+@.+\..+/;
    const fromEmail = this.form.value.from_email;
    if (!emailPattern.test(fromEmail)) {
      alert('L\'adresse e-mail n\'est pas valide !');
      return; // Ne continuez pas l'envoi si l'adresse e-mail n'est pas valide
    }
    if (!this.form.valid) {
      alert('Un des champs est mal renseigné !');
      return; // Ne continuez pas l'envoi si le formulaire n'est pas valide
    }

    let response = await emailjs.send("service_laff2nh","template_xxbpyfi",{
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value['from_email'].value ?? '', //let email: string = this.loginForm.controls['email'].value ?? '';
      subject: this.form.value.subject,
      message: this.form.value.message,
    });

    alert('Le message a bien été envoyé !')
    this.form.reset();
  }

  typeEffect() {
    const text = this.textToWrite;
    const element = this.detailsElement.nativeElement;

    if (!this.isDeleting) {
      if (this.currentIndex < text.length) {
        element.textContent += text.charAt(this.currentIndex);
        this.currentIndex++;
        const delay = this.typingSpeed;
        setTimeout(() => this.typeEffect(), delay);
      } else {
        this.isDeleting = true;
        setTimeout(() => {
          const delay = this.typingSpeed;
          this.typeEffect();
        }, this.pauseDuration);
      }
    } else {
      if (element.textContent.length > 0) {
        element.textContent = element.textContent.slice(0, -1);
        const delay = this.typingSpeed;
        setTimeout(() => this.typeEffect(), delay);
      } else {
        this.isDeleting = false;
        this.currentIndex = 0;
        setTimeout(() => this.typeEffect(), this.pauseDuration);
      }
    }
  }

  see_map() {
    // Utiliser window.scrollTo() pour déplacer la page vers la nouvelle position
    const divToScrollTo = document.getElementById('google_map_div'); // Remplacez 'id_de_votre_div' par l'ID de votre div

    if (divToScrollTo) {
      // Obtenez la position de la div par rapport au haut de la page
      const divPosition = divToScrollTo.getBoundingClientRect().top + window.scrollY;

      // Utilisez window.scrollTo() pour faire défiler la page jusqu'à la position de la div
      window.scrollTo({
        top: divPosition,
        behavior: 'smooth' // Pour un défilement fluide, utilisez 'smooth'
      });
    }
  }
}
