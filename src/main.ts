import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Navbar from './components/common/Navbar.vue'
import Button from './components/ui/button/Button.vue'
import MenuIcon from './components/icons/MenuIcon.vue'
import CloseIcon from './components/icons/CloseIcon.vue'
import Header from './components/containers/Header.vue'
import Services from './components/containers/Services.vue'
import Footer from './components/common/Footer.vue'
import Newsletter from './components/containers/Newsletter.vue'
import About from './components/containers/About.vue'
import PremiumMenu from './components/containers/PremiumMenu.vue'
import NewArrivals from './components/containers/NewArrivals.vue'
import Discount from './components/containers/Discount.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App)
app.component('NavBar', Navbar)
app.component('Button', Button)
app.component('MenuIcon', MenuIcon)
app.component('CloseIcon', CloseIcon)
app.component('Header', Header)
app.component('Services', Services)
app.component('Footer', Footer)
app.component('Newsletter', Newsletter)
app.component('About', About)
app.component('PremiumMenu', PremiumMenu)
app.component('NewArrivals', NewArrivals)
app.component('Discount', Discount) 

AOS.init({
    duration: 1000, 
    once: false,
});


app.mount('#app')
