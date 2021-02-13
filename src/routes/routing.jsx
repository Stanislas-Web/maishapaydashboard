import Paiement from '../views/paiment/paiment.jsx';
import Starter from '../views/starter/starter.jsx';
// ui components
import Alerts from '../views/ui-components/alert.jsx';
import Badges from '../views/ui-components/badge.jsx';
import Buttons from '../views/ui-components/button.jsx';
import Cards from '../views/ui-components/cards.jsx';
import LayoutComponent from '../views/ui-components/layout.jsx';
import PaginationComponent from '../views/ui-components/pagination.jsx';
import PopoverComponent from '../views/ui-components/popover.jsx';
import TooltipComponent from '../views/ui-components/tooltip.jsx';

var ThemeRoutes = [
  { 
    path: '/dashboard', 
    name: 'Accueil', 
    icon: 'mdi mdi-home', 
    component: Starter 
  },
  {
    path: '/activezcompte',
    name: 'Activez votre compte',
    icon: 'mdi mdi-account-edit',
    component: Alerts
  },
  {
    path: '/paiment',
    name: 'Paiements',
    icon: 'mdi mdi-cash-multiple',
    component: Paiement
  },
  {
    path: '/solde',
    name: 'Solde',
    icon: 'mdi mdi-cash-usd',
    component: Buttons
  },
  {
    path: '/client',
    name: 'Clients',
    icon: 'mdi mdi-account-circle',
    component: Cards
  },
  {
    path: '/compteconnecte',
    name: 'Comptes connectés',
    icon: 'mdi mdi-account-switch',
    component: LayoutComponent
  },
  {
    path: '/produit',
    name: 'Produits',
    icon: 'mdi mdi-package-variant',
    component: PaginationComponent
  },
  {
    path: '/rapport',
    name: 'Rapports',
    icon: 'mdi mdi-chart-areaspline',
    component: PaginationComponent
  },
  {
    path: '/dev',
    name: 'Developpeurs',
    icon: 'mdi mdi-xml',
    component: TooltipComponent
  },
  {
    path: '/test/dashboard',
    name: 'Mode test',
    icon: 'mdi mdi-pencil-circle',
    component: Starter
  },
  {
    path: '/parametre',
    name: 'Paramètres',
    icon: 'mdi mdi-image-filter-vintage',
    component: TooltipComponent
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
