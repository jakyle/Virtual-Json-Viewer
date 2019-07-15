import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VirtualJsonViewer from './Components/VirtualJson';
import * as serviceWorker from './serviceWorker';
import { exampleData, arrayBraceData } from './exampleData';

ReactDOM.render(<VirtualJsonViewer className="List"
                    height={800}
                    itemSize={20}
                    width={1200}
                    json={exampleData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
