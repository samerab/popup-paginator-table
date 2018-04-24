import {
    trigger,
    state,
    style,
    animate,
    transition,
    group
  } from '@angular/animations';

  export let flyInOut =  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translatey(-200%)'}),
      animate(300)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translatey(100%)'}))
    ])
  ])




  export let heroState =  trigger('heroState', [
    state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
    transition('void => *', [
      style({width: 10, transform: 'translateX(50px)', opacity: 0}),
      group([
        animate('3s 0.1s ease-in', style({
          transform: 'translateX(0)',
          width: 120,
          background:'red'
        })),
        animate('0.3s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition('* => void', [
      group([
        animate('0.3s ease', style({
          transform: 'translateX(50px)',
          width: 10
        })),
        animate('0.3s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])