import {configureStore} from '@reduxjs/toolkit';
import projectReducer from './projectSlice';

const projectStorage = configureStore({
    reducer: {
        project: projectReducer
    }
});

export default projectStorage;
