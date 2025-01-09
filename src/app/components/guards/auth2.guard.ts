import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const auth2Guard: CanActivateFn = (route, state) => {
  const router = inject( Router );

  const localData = localStorage.getItem('token');
  
  if (localData != null) {
    router.navigateByUrl('/dashboard')

    return false;
  }else{
    return true;
  }  };
