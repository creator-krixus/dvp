import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWhatsapp, faInstagram, faTiktok, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faStar, faLocationDot, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faWhatsapp, faStar, faInstagram, faTiktok, faLocationDot, faFacebookF, faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)
