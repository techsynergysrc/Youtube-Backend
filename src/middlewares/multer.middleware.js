import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./Public/temp");
    },
    fileName: function (req, file, cb) {
        cb(null, file.orginalName);
    },
});

export const upload = multer({
    storage,
});
