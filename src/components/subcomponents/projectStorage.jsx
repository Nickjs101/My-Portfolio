import {configureStore} from '@reduxjs/toolkit';
import projectReducer from '../data/projectSlice';

const projectStorage = configureStore({
    reducer: {
        project: projectReducer
    }
});

export default projectStorage;
