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
    path: '/alert',
    name: 'Activez votre compte',
    icon: 'mdi mdi-account-edit',
    component: Alerts
  },
  {
    path: '/badge',
    name: 'Paiements',
    icon: 'mdi mdi-cash-multiple',
    component: Badges
  },
  {
    path: '/button',
    name: 'Solde',
    icon: 'mdi mdi-cash-usd',
    component: Buttons
  },
  {
    path: '/card',
    name: 'Clients',
    icon: 'mdi mdi-account-circle',
    component: Cards
  },
  {
    path: '/grid',
    name: 'Comptes connectés',
    icon: 'mdi mdi-account-switch',
    component: LayoutComponent
  },
  {
    path: '/pagination',
    name: 'Produits',
    icon: 'mdi mdi-package-variant',
    component: PaginationComponent
  },
  {
    path: '/pagination',
    name: 'Rapports',
    icon: 'mdi mdi-chart-areaspline',
    component: PaginationComponent
  },
  {
    path: '/pop',
    name: 'Developpeurs',
    icon: 'mdi mdi-xml',
    component: TooltipComponent
  },
  {
    path: '/popover',
    name: 'Mode test',
    icon: 'mdi mdi-pencil-circle',
    component: PopoverComponent
  },
  {
    path: '/ui-components/tooltip',
    name: 'Paramètres',
    icon: 'mdi mdi-image-filter-vintage',
    component: TooltipComponent
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
