# Elite Guard Car Care - Web Application (v0.1)

Welcome to the frontend repository for **Elite Guard Car Care**, the digital presence for premium automotive protection and window tinting services operating across Dubai and Abu Dhabi.

This project is built using a modern **React + Vite** architecture, designed to deliver a high-end, visually realistic, and highly responsive user experience that aligns with strict professional branding standards.

---

## 🚀 Project Overview

The Elite Guard web platform (`eliteguardcarcare.com`) is optimized for seamless customer interaction, high-converting lead generation, and robust local SEO. It serves as the primary touchpoint for both automotive clients and commercial/residential contractors.

The architecture is built to be lightweight and easily maintainable, ensuring that site updates, marketing copy adjustments, and media replacements can be managed efficiently and deployed directly via Hostinger's hPanel.

---

## 🛠️ Tech Stack

- **Framework:** [React](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/) (featuring Hot Module Replacement)
- **Core Languages:** JavaScript, CSS, HTML
- **Linting:** [ESLint](https://eslint.org/) for code quality and consistency

---

## 🔑 Key Features & Business Modules

- **Automotive Services Showcase:** Detailed, conversion-focused service pages highlighting Paint Protection Film (PPF), Ceramic Coating, and Auto Accessories Fitting.
- **Architectural Tinting Division:** Dedicated service flows tailored for Home, Villa, Office, and Apartment window tinting inquiries.
- **Ad-Optimized Landing Pages:** Structured to integrate seamlessly with active Google Ads campaigns, built to support high-intent keywords, dynamic headlines, and rapid A/B testing.
- **High-Fidelity Media Rendering:** Optimized to handle pixel-perfect graphic assets, such as realistic tint shade analysis and before/after transformation galleries.

---

## 💻 Local Development Setup

To run this project locally, ensure you have **Node.js** installed, then execute the following commands in your terminal:

```bash
# 1. Clone the repository
git clone [https://github.com/dev-kamal-kt/elite-guard-0.1.git](https://github.com/dev-kamal-kt/elite-guard-0.1.git)

# 2. Navigate into the project directory
cd elite-guard-0.1

# 3. Install dependencies
npm install

# 4. Start the Vite development server
npm run dev
```

---

## 🌐 Production Build & Hosting Setup

**To deploy the application to a live server environment (such as Hostinger, Apache, or any shared hosting), the project must first be compiled into production-ready static files.**

### Step 1: Create the Production Build

```bash
# Ensure you are in the project root
cd elite-guard-0.1

# Install dependencies (if not already done)
npm install

# Generate the production build
npm run build
```

**Once the build completes, a new dist folder will be generated in your project root. This folder contains the minified, production-ready version of the website.**

### Step 2: Configure Apache Routing (.htaccess)

**Because this is a Single Page Application (SPA), direct links or page refreshes on sub-pages (e.g., /services) will return a 404 error on standard Apache shared hosting.**


**To resolve this, you must create a file named .htaccess inside your dist folder and paste the following configuration:**


```bash
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Note :** This code intercepts server requests and directs them to index.html, allowing React Router to correctly handle the page views.

### Step 3: Deployment via Hostinger hPanel

**Compress the contents of your dist folder (including the newly created .htaccess file) into a .zip file.**

- Log in to your Hostinger hPanel.

- Navigate to Files > File Manager.

- Open the public_html directory for your domain.

- Upload your .zip file and extract it directly into public_html.

- Ensure the .htaccess and index.html files are visible in the root of public_html.


## 📝 Contact & Support

Gemini said
Here is the complete content for your README.md file. You can copy and paste this directly into your project.

Markdown
# Elite Guard Car Care - Web Application (v0.1)

Welcome to the frontend repository for **Elite Guard Car Care**, the digital presence for premium automotive protection and window tinting services operating across Dubai and Abu Dhabi.

This project is built using a modern **React + Vite** architecture, designed to deliver a high-end, visually realistic, and highly responsive user experience that aligns with strict professional branding standards.

---

## 🚀 Project Overview

The Elite Guard web platform (`eliteguardcarcare.com`) is optimized for seamless customer interaction, high-converting lead generation, and robust local SEO. It serves as the primary touchpoint for both automotive clients and commercial/residential contractors.

The architecture is built to be lightweight and easily maintainable, ensuring that site updates, marketing copy adjustments, and media replacements can be managed efficiently and deployed directly via Hostinger's hPanel.

---

## 🛠️ Tech Stack

- **Framework:** [React](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/) (featuring Hot Module Replacement)
- **Core Languages:** JavaScript, CSS, HTML
- **Linting:** [ESLint](https://eslint.org/) for code quality and consistency

---

## 🔑 Key Features & Business Modules

- **Automotive Services Showcase:** Detailed, conversion-focused service pages highlighting Paint Protection Film (PPF), Ceramic Coating, and Auto Accessories Fitting.
- **Architectural Tinting Division:** Dedicated service flows tailored for Home, Villa, Office, and Apartment window tinting inquiries.
- **Ad-Optimized Landing Pages:** Structured to integrate seamlessly with active Google Ads campaigns, built to support high-intent keywords, dynamic headlines, and rapid A/B testing.
- **High-Fidelity Media Rendering:** Optimized to handle pixel-perfect graphic assets, such as realistic tint shade analysis and before/after transformation galleries.

---

## 💻 Local Development Setup

To run this project locally, ensure you have **Node.js** installed, then execute the following commands in your terminal:

```bash
# 1. Clone the repository
git clone [https://github.com/dev-kamal-kt/elite-guard-0.1.git](https://github.com/dev-kamal-kt/elite-guard-0.1.git)

# 2. Navigate into the project directory
cd elite-guard-0.1

# 3. Install dependencies
npm install

# 4. Start the Vite development server
npm run dev
🌐 Production Build & Hosting Setup
To deploy the application to a live server environment (such as Hostinger, Apache, or any shared hosting), the project must first be compiled into production-ready static files.

Step 1: Create the Production Build
Run the following commands to generate the optimized files:

Bash
# Ensure you are in the project root
cd elite-guard-0.1

# Install dependencies (if not already done)
npm install

# Generate the production build
npm run build
Once the build completes, a new dist folder will be generated in your project root. This folder contains the minified, production-ready version of the website.

Step 2: Configure Apache Routing (.htaccess)
Because this is a Single Page Application (SPA), direct links or page refreshes on sub-pages (e.g., /services) will return a 404 error on standard Apache shared hosting.

To resolve this, you must create a file named .htaccess inside your dist folder and paste the following configuration:

Apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Note: This code intercepts server requests and directs them to index.html, allowing React Router to correctly handle the page views.**

### Step 3: Deployment via Hostinger hPanel

**Compress the contents of your dist folder (including the newly created .htaccess file) into a .zip file.**

- Log in to your Hostinger hPanel.

- Navigate to Files > File Manager.

- Open the public_html directory for your domain.

- Upload your .zip file and extract it directly into public_html.

- Ensure the .htaccess and index.html files are visible in the root of public_html.


---

## 📝 Contact & Support

**Project Lead: Kamal Hussain**

**Company: Elite Guard Auto Accessories Fitting L.L.C.**

**Service Areas: Dubai & Abu Dhabi, UAE**

**Website: eliteguardcarcare.com**

### Thank You !