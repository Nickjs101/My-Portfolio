import {configureStore} from '@reduxjs/toolkit';
import projectReducer from '../../assets/data/projectSlice';

const projectStorage = configureStore({
    reducer: {
        project: projectReducer
    }
});

export default projectStorage;
