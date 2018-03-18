import $ from 'jquery';

class MobileMenu {

	constructor() {
		this.menu_icon = $('.menu-icon');
		this.site_sidebar_mobile = $('.site-sidebar__mobile');
		// navbar display fix
		this.site_sidebar_nav_list = $('.site-sidebar__nav-list');
		this.events();
	}

	events() {
		this.menu_icon.click(this.toggleMenu.bind(this));
	}

	toggleMenu() {
		this.site_sidebar_mobile.toggleClass("site-sidebar__mobile--is-extended");
		// navbar display fix
		this.site_sidebar_nav_list.toggleClass("site-sidebar__nav-list--is-extended");

	}

}

export default MobileMenu;