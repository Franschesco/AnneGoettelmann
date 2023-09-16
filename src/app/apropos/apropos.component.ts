import { Component } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.scss']
})
export class AproposComponent {
  return_box_parcours() {
    if (window.innerWidth < 900) {
      return ('box_parcours_1_little');
    } else {
      return ('box_parcours_1');
    }
  }

  get_box_anagram() {
    if (window.innerWidth < 550) {
      return ('box_anagrame_little')
    }
    if (window.innerWidth < 900) {
      return ('box_anagrame_medium')
    }
    return ('box_anagrame')
  }

  get_anagram_img() {
    if (window.innerWidth < 750) {
      return ('anagrame_img_little')
    }
    return ('anagrame_img')
  }

  return_pink_texte() {
    if (window.innerWidth < 900) {
      return ('pink_texte_little');
    } else {
      return ('pink_texte');
    }
  }

  return_right_pictures() {
    if (window.innerWidth < 900) {
      return ('right_pictures_little');
    } else {
      return ('right_pictures');
    }
  }
}
