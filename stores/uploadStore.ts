import { defineStore } from "pinia";
import { useFirebaseStorage } from "vuefire";
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const uploadStore = defineStore('uploadStore', {
    state: () => {
        return {
            dialogupload: false,
            downloadUrl: '',
            progressUpload: 0,
            uploading: false,
            uploadEnd: false,
            namefile: '',
            urlRef: '',
            fileuploa: File,
            typefile: '',
        }
    },
    getters: {
        getUrlRef(state) {
            return state.urlRef
        },
        getprogressUpload(state) {
            return state.progressUpload
        },
        getDownloadUrl(state) {
            return state.downloadUrl
        },
        gedialogupload(state) {
            return state.dialogupload
        },
        getnamfile(state) {
            return state.namefile
        }
    },
    actions: {
        setReset() {
            this.dialogupload = false,
                this.downloadUrl = '',
                this.progressUpload = 0,
                this.uploading = false,
                this.uploadEnd = false,
                this.namefile = '',
                this.urlRef = '',
                this.fileupload = '',
                this.typefile = ''
        },
        setnameFile(item: any) {
            this.namefile = item
        },
        setfile(file: Blob) {
            this.fileupload = file
        },
        setTypeFile(item: any) {
            this.typefile = item
        },
        simpanFileAction() {
            const storage = useFirebaseStorage();

            return new Promise(async (resolve, reject) => {
                try {
                    var metadata = {
                        contentType: this.typefile,
                    };
                    const filenamaref = storageRef(storage, "images/" + this.namefile);
                    const uploadTask = uploadBytesResumable(filenamaref, this.fileupload);

                    uploadTask.on('state_changed',
                        (snapshot) => {
                            // Observe state change events such as progress, pause, and resume
                            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            this.progressUpload = progress
                            console.log('Upload is ' + progress + '% done');
                            switch (snapshot.state) {
                                case 'paused':
                                    console.log('Upload is paused');
                                    break;
                                case 'running':
                                    console.log('Upload is running');
                                    break;
                            }
                        },
                        (error) => {
                            
                        },
                        () => {
                            
                            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                this.urlRef = downloadURL
                                this.downloadUrl = downloadURL
                                console.log('File available at', downloadURL);
                            });
                        })
                } catch (error) {
                    return reject(error)
                }
            })
        },
    }

})



