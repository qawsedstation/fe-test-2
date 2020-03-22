// dont put any source in this file, this is just an entry point for the app.
// you can require things in.
import App from './app';
import './styles.css';

const app = new App(1, 144);
app.onInit();
