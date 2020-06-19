import { useState, useEffect } from "react";
import { useCamera } from "@ionic/react-hooks/camera";
import { useFilesystem, base64FromPath } from "@ionic/react-hooks/filesystem";
import { useStorage } from "@ionic/react-hooks/storage";
import { isPlatform } from "@ionic/react";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { Plugins, CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";


export interface Photo {
    filepath: string;
    webviewPath?: string;
    base64?: string;
}

export function usePhotoGallery() {

    const { Camera } = Plugins;
    const [photos, setPhotos] = useState<Photo[]>([]);

    const takePhoto = async () => {
        const cameraPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100
        });

        const fileName = new Date().getTime() + ".jpeg";
        const newPhotos = [{
            filepath: fileName,
            webviewPath: cameraPhoto.webPath
        }, ...photos];
        setPhotos(newPhotos);
    };

    return {
        photos,
        takePhoto
    };
}