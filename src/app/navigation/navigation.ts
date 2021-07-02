import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [

    {
        id       : 'dashboards',
        title    : '모바일 게임',
        translate: '모바일 게임',
        type     : 'collapsable',
        icon     : 'dashboard',
        children : [
            {
                id   : 'analytics',
                title: '로그인',
                type : 'item',
                url  : '/apps/academy'
            }
        ]
    },
    {
        id       : 'academy',
        title    : '고객센터',
        translate: '고객센터',
        type     : 'item',
        icon     : 'school',
        url      : '/apps/academy'
    },
];
