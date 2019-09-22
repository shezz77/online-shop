import React from 'react';
import {AppModel} from "./models/app";

export default React.createContext({
    ...AppModel,

    handleUpdateMainState: () => {}
});