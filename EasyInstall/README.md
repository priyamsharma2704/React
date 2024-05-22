# EASYINSTALL

Aim of this app is to make the task of installing several applications easy. This app allows user to select desired applications and then generate a batch file. On running that batch file, the selected applications will be installed, hence saving a lot of time.
For windows the script users "winget" to download the applications.

DEMO -> https://easy-install.vercel.app/

### How to use

- Select the desire application by clicking the checkbox against it. As selections are made, the cart at the top right corner gets updated.
- "Search" field can be used to search a specific application.
- Clicking on cart shows the selected applications.
- Any selected application can also be removed from the cart or more applications can be added by going back to the HOME page from the Cart page.
- "Download Script" button will download a batch script which will install the applications upon running it.
  

Only *WINDOWS* is supported as of now
### FUTURE ENHANCEMENT

- Add support of linux.

- Extend the list of applications.

- Make different categories like "development", "edititng", "live streaming" etc which will have pre-selected applications

### Modules used

- React Router

- Zustand - state management

- Download file using file-saver

- Material-UI

- Express

- Cors

- Nodemon

- Mongoose


![ezgif-1-da01cbcec7](https://github.com/priyamsharma2704/React/assets/15176529/dfa46d00-8c43-4a52-b00f-2567eb6a186f)


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
