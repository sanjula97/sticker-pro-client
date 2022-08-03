import '../styles/globals.css';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { initializeStore } from '../redux/store';

const { store, persistor } = initializeStore();

function MyApp({ Component, pageProps }) {

  const onBeforeLift = () => {
    // PersistGate delays the rendering of your app's UI until your persisted state
    // has been retrieved and saved to redux store
    // Use this callback to take some action before the gate lifts
  };


  return (
      <ReduxProvider store={store} >
        <PersistGate
        persistor={persistor}
        onBeforeLift={onBeforeLift}>
          <Component {...pageProps} />
        </PersistGate>
      </ReduxProvider>
  );
}

export default MyApp;