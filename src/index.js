import React from 'react';
import ReactDOM from 'react-dom';
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { deviceType, osName } from "react-device-detect";
import getUserId from './utils/getUserId';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let id = getUserId();


// (async () => {
//   const LDProvider = await asyncWithLDProvider({
//     clientSideID: process.env.launchdarkly_client_key,
//     user: {
//       key: id,
//       custom: {
//         device: deviceType,
//         operatingSystem: osName,
//       },
//     },
//   }
//   );

// ReactDOM.render(
//   <LDProvider>
//     <App />
//   </LDProvider>,

//   document.getElementById('root')
// );
// })();
function App() {
  const ldClient = useLDClient();

  useEffect(() => {
    // Tracking your memberId lets us know you are connected.
    ldClient?.track(process.env.launchdarkly_client_key);
  }, [ldClient]);

  return <div>Let your feature flags fly!</div>
}

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: process.env.launchdarkly_client_key,
    context: {
      "kind": "user",
      "key": id,
      "name": "Sandy Smith",
      "email": "sandy@example.com",
      custom: {
        device: deviceType,
        operatingSystem: osName,
      }
    },
    options: {
      // the observability plugins require React Web SDK v3.7+
      plugins: [
        new Observability(),
        new SessionReplay()
      ],
      // other options...
    }
  });
  render(
    <LDProvider>
      <App />
    </LDProvider>,
    document.getElementById('root'),
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
