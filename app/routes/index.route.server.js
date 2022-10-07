/*
    File Name: index.route.server.js
    Student Name: Jonathan Champ
    Student ID: 301230592
    Date: 2022-10-07
*/
//Index Routes imported
import { Router } from 'express';
import { displayHomePage, 
    displayAboutPage, 
    displayProjectsPage, 
    displayServicesPage, 
    displayContactPage } from '../controllers/index.controller.server.js'

//Intanciates a router
const router = Router();

//Implement middleware to connect application
router.get('/',displayHomePage);
router.get('/home',displayHomePage);
router.get('/about', displayAboutPage );
router.get('/projects', displayProjectsPage );
router.get('/services', displayServicesPage );
router.get('/contact', displayContactPage );

export default router;