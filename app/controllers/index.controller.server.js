/*
    File Name: index.controller.server.js
    Student Name: Jonathan Champ
    Student ID: 301230592
    Date: 2022-10-07
*/

// Index Controller
//exports home page function
export function displayHomePage(req, res, next){
    res.render('index', { title: 'Home', page: 'home' });
};
//exports about page function
export function displayAboutPage(req, res, next) {
    res.render('index', {title: 'About', page: 'about'});
}
//exports contact page function
export function displayContactPage(req, res, next) {
    res.render('index', {title: 'Contact', page: 'contact'});
}
//exports projects page function
export function displayProjectsPage(req, res, next) {
    res.render('index', {title: 'Projects', page: 'projects'});
}
//exports services page function
export function displayServicesPage(req, res, next) {
    res.render('index', {title: 'Services', page: 'services'});
}
