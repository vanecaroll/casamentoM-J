/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

// Função para verificar se o checkbox estava marcado anteriormente e marcar novamente se estiver
/*
window.onload = function() {
    var checkbox = document.getElementById('checkbox1');
    var isChecked = localStorage.getItem('checkbox1');

    if (isChecked === 'true') {
        checkbox.checked = true;
    }

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            localStorage.setItem('checkbox1', 'true');
        } else {
            localStorage.setItem('checkbox1', 'false');
        }
    });
}
*/

// Função para verificar e definir o estado dos checkboxes ao carregar a página
window.onload = function() {
    // Array de IDs dos checkboxes
    var checkboxIds = ['checkbox1', 'checkbox2', 'checkbox3', 'checkbox4', 'checkbox5', 'checkbox6', 'checkbox7', 'checkbox8', 'checkbox9', 'checkbox10', 'checkbox11', 'checkbox12', 'checkbox13', 'checkbox14', 'checkbox15', 'checkbox16', 'checkbox17', 'checkbox18', 'checkbox19', 'checkbox20', 'checkbox21', 'checkbox22', 'checkbox23', 'checkbox24', 'checkbox25', 'checkbox26', 'checkbox27', 'checkbox28', 'checkbox29', 'checkbox30', 'checkbox31', 'checkbox32', 'checkbox33', 'checkbox34', 'checkbox35', 'checkbox36', 'checkbox37', 'checkbox38', 'checkbox39', 'checkbox40', 'checkbox41', 'checkbox42', 'checkbox43', 'checkbox44', 'checkbox45', 'checkbox46', 'checkbox47']; // Adicione mais IDs conforme necessário
    
    // Loop para verificar e definir o estado dos checkboxes
    checkboxIds.forEach(function(id) {
        var checkbox = document.getElementById(id);
        var isChecked = localStorage.getItem(id);

        if (isChecked === 'true') {
            checkbox.checked = true;
        }

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                localStorage.setItem(id, 'true');
            } 
            else {
                localStorage.setItem(id, 'false');
            }
        });
    });
}

});

