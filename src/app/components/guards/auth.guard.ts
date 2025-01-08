import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  console.log('can activate')
  console.log( { route, state } )


  return true;
};
