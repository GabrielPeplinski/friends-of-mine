import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from '@angular/router';

export const permissionGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  console.log('Permissão de Guard ativa!');
  return true;
};
