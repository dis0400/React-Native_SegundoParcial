import imageInstance from "./ImageService";

export const getAllImages = () => {
    return imageInstance.get('/');
};

export const getImagesByCategory = (category) => {
    return imageInstance.get(`/category/${category}`);
};

export const getImagesByYear = (year) => {
    return imageInstance.get(`/year/${year}`);
};

export const getImagesByMonth = (year, month) => {
    return imageInstance.get(`/year/${year}/month/${month}`);
};

