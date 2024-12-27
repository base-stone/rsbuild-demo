import { createRoot } from 'react-dom/client';
import '@ant-design/v5-patch-for-react-19'
import App from './App';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = createRoot(rootEl)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
