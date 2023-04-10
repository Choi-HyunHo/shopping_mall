import axios from "axios"; // import the default instance

const { VITE_CLOUDINARY_PRESET, VITE_CLOUDINARY_URL } = import.meta.env;

export async function uploadImage(file) {
    const instance = axios.create();
    const url = VITE_CLOUDINARY_URL;
    const formData = new FormData();

    formData.append("upload_preset", VITE_CLOUDINARY_PRESET);
    formData.append("file", file);

    const configOfUpload = {
        header: { "Content-Type": "multipart/form-data" },
    };

    const { data } = await instance.post(url, formData, configOfUpload);

    return data.url;
}
