export class MenuItem {
    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = ''
    ) {}
}

export const menuList = [
    new MenuItem('Registros', 'chemistry', 'chemistry class material', 'access_time'),
    new MenuItem('Ordenes', 'biology', 'biology class material', 'receipt'),
    new MenuItem('Productos', 'mathematics', 'mathematics class material', 'store'),
    new MenuItem('Usuarios', 'physics', 'physics class material', 'group')
];