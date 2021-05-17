const Menu = {
    about() {
        let id = 'menu-abo';
        let section = 'about';
        Menu.trocaMenu(id);
        Menu.slidePage(section);
    },
    skills() {
        let id = 'menu-ski';
        let section = 'skills';
        Menu.trocaMenu(id);
        Menu.slidePage(section);
    },
    contact() {
        let id = 'menu-con';
        let section = 'contact';
        Menu.trocaMenu(id);
        Menu.slidePage(section);
    },
    services() {
        let id = 'menu-ser';
        let section = 'services';
        Menu.trocaMenu(id);
        Menu.slidePage(section);
    },
    projects() {
        let id = 'menu-pro';
        let section = 'projects';
        Menu.trocaMenu(id);
        Menu.slidePage(section);
    },
    interests() {
        let id = 'menu-int';
        let section = 'interests';
        Menu.trocaMenu(id);
        Menu.slidePage(section);
    },
    experiences() {
        let id = 'menu-exp';
        let section = 'experiences';
        Menu.trocaMenu(id);
        Menu.slidePage(section);
    },
    trocaMenu(id) {
        let active = document.querySelector('.active');
        let none = document.querySelector('.visible');
        let clicked = document.querySelector('.clicked');
        clicked.classList.remove('clicked');
        let click = document.getElementById(id).querySelector('svg');
        click.classList.add('clicked');
        active.classList.remove('active');
        document.getElementById(id).classList.add('active');
        none.classList.remove('visible');
        none.classList.add('none');
        let visible = document.getElementById(id).querySelector('.none');
        visible.classList.add('visible');
        visible.classList.remove('none');
    },
    slidePage(section) {
        let active = document.querySelector('.pageIn');
        active.classList.remove('pageIn');
        active.classList.add('pageOut');
        let insert = document.getElementById(section);
        insert.classList.remove('pageOut');
        insert.classList.add('pageIn');
    }
}

console.log("Olá Devs 👨🏽‍🚀. Vamos decolar 🚀, antes que o Asteroide ☄️ venha! \nPor favor #seduida e mantenha o #distanciamentosocial 👨🏽‍⚕️. 💜");