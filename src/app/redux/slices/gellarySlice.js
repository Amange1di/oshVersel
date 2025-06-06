import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '@shared/api/axios.js';

export const fetchGalleryPhotos = createAsyncThunk(
    'gallery/fetchGalleryPhotos',
    async () => {
        const response = await instance.get('/gellaryphotos/');
        return response.data;
    }
);

const gellarySlice = createSlice({
    name: 'gallery',
    initialState: {
        photos: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGalleryPhotos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGalleryPhotos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.photos = action.payload;
            })
            .addCase(fetchGalleryPhotos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default gellarySlice.reducer;
