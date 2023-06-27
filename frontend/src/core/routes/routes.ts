import { SwitchRoutes } from './routes.model'
import { generatePath } from 'react-router'


export const switchRoutes: SwitchRoutes = {
  root: '/',
  aboutUs: '/aboutUs',
  contact: '/contact',
  film: '/films/:id'
}

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'film'> {
  film: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  film: id => generatePath(switchRoutes.film, { id }),
}
