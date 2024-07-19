# agrigistics
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.


# agrigistics Project

I built this project as an Angular 18 application, demonstrating various functionalities including data fetching services (REST API), models, routing, lazy loading, modularisation, components, Bootstrap CSS, Font Awesome, and global CSS. It includes components, services, and models to handle user and employee data, and features a global CSS setup to ensure consistent styling across the application.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Key Files](#key-files)


## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Mfabela/agrigistics.git

cd agrigistics

run "npm install"


## Usage
2. run "ng serve"


## Features
3. 

Services
Rxjs
REST Api (JSON)
Models
Routing
Lazy Loading
Modules /Modularisation
Components
Bootstrap CSS
Font Awesome
Custom Global CSS


## Project Structure
4. 

your-angular-project/<br />
├── src/<br />
│   ├── app/<br />
│   │   ├── core/<br />
│   │   │   ├── modules/<br />
│   │   │   │   ├── dashboard/<br />
│   │   │   │   │   ├── dashboard.component.ts<br />
│   │   │   │   │   ├── dashboard.component.html<br />
│   │   │   │   │   ├── dashboard.component.scss<br />
│   │   │   │   │   ├── dashboard.module.ts<br />
│   │   │   │   └── ├── components<br />
│   │   ├── shared/<br />
│   │   │   ├── models/<br />
│   │   │   │   ├── user.model.ts<br />
│   │   │   ├── services/<br />
│   │   │   │   ├── data.service.ts<br />
│   │   ├── app-routing.module.ts<br />
│   │   ├── app.component.ts<br />
│   │   ├── app.component.html<br />
│   │   ├── app.component.scss<br />
│   ├── assets/<br />
│   │   ├── data/<br />
│   │   │   ├── json/<br />
│   │   │   │   ├── user.json<br />
│   │   │   │   ├── employees.json<br />
│   ├── styles.scss<br />
├── angular.json<br />
├── package.json<br />
├── README.md<br />


## Key Files
app/core/modules/dashboard/: Contains the dashboard module and components.<br />
app/shared/models/: Defines TypeScript models for user and employee data.<br />
app/shared/services/: Provides data services to fetch data from JSON files.<br />
assets/data/json/: Stores JSON data files used in the application.<br />
styles.scss: Global styles applied across the application.<br />
