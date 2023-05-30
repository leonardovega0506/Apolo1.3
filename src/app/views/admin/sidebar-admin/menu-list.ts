export class MenuItem {
    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = ''
    ) {}
}

export const menuList = [
    new MenuItem('Registros', 'registros', 'Registros', 'access_time'),
    new MenuItem('Ordenes', 'ordenes', 'Ordenes', 'receipt'),
    new MenuItem('Productos', 'items', 'Items', 'store'),
    new MenuItem('Usuarios', 'usuarios', 'Usuarios', 'group')
];