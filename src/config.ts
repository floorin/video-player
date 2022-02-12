// tslint:disable-next-line:only-arrow-functions
import {TMediaFile} from "@/types/TMediaFile";

export const mediaFilesLocation = 'http://localhost:8080/media';


export const mediaFiles:Omit<TMediaFile, "isPlaying"> []=[
    {
        name:'1_avc_360p.mp4', type:'mp4'
    },
    {
        name:'1_avc_1080p.mp4', type:'mp4'
    },
    {
        name:'1_avc_uhd.mp4', type:'mp4'
    }
];
