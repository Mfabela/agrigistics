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

your-angular-project/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── modules/
│   │   │   │   ├── dashboard/
│   │   │   │   │   ├── dashboard.component.ts
│   │   │   │   │   ├── dashboard.component.html
│   │   │   │   │   ├── dashboard.component.scss
│   │   │   │   │   ├── dashboard.module.ts
│   │   │   │   └── ├── components
│   │   ├── shared/
│   │   │   ├── models/
│   │   │   │   ├── user.model.ts
│   │   │   ├── services/
│   │   │   │   ├── data.service.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   ├── assets/
│   │   ├── data/
│   │   │   ├── json/
│   │   │   │   ├── user.json
│   │   │   │   ├── employees.json
│   ├── styles.scss
├── angular.json
├── package.json
├── README.md


## Key Files
app/core/modules/dashboard/: Contains the dashboard module and components.
app/shared/models/: Defines TypeScript models for user and employee data.
app/shared/services/: Provides data services to fetch data from JSON files.
assets/data/json/: Stores JSON data files used in the application.
styles.scss: Global styles applied across the application.
