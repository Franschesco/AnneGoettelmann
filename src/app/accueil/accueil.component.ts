import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  @ViewChild('details', { static: true }) detailsElement!: ElementRef;

  private textToWrite = 'Thérapies Humanistes';
  private currentIndex = 0;
  private isDeleting = false;
  private typingSpeed = 150; // Vitesse de frappe en millisecondes
  private pauseDuration = 750; // Durée de la pause en millisecondes après écriture complète

  ngOnInit() {
    this.typeEffect();
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
}
