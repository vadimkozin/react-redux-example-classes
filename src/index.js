import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "../src/reducer.jsx";
import App from "../src/components/app";

const store = createStore(reducer);

// хранилище(store) инициализируется в редьюсере (reducer), но в данной точке можно переинициализировать
// store.dispatch({
//   type: `SET_STATE`, state: {phones: [`phone-1`, `phone-2`]}
// });

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
