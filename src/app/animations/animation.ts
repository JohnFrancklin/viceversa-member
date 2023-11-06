import { trigger, state, style, transition, group, animate } from "@angular/animations";

export const Animation = [
    trigger('slideInDown', [
        transition(':enter', [
          style({ transform: 'translateY(-100%)' }),
          animate('500ms ease-out', style({ transform: 'translateY(0)' })),
        ]),
        transition(":leave", [
          animate('500ms ease-out', style({ transform: 'translateY(-100%)' })),
        ])
      ])
]