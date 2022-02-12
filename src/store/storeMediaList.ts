import {store} from './index';
import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators';
import {TMediaFile} from "@/types/TMediaFile";

@Module({ namespaced: true, dynamic: true, store, name: 'storeMediaList'})
export default class storeMediaList extends VuexModule {
    public mediaFiles: TMediaFile[]=[];

    @Mutation
    public PUSH_FILE_TO_MEDIA_LIST(mediaFile: TMediaFile) {
        this.mediaFiles.push(mediaFile);
    }
    @Action
    public push_file_to_media_list(mediaFile: TMediaFile) {
        this.context.commit('PUSH_FILE_TO_MEDIA_LIST', mediaFile);
    }


    @Mutation
    public SET_FILE_TO_PLAY(fileName: string) {
        //this.mediaFiles=[];
        console.log('start SET_FILE_TO_PLAY')
        this.mediaFiles=this.mediaFiles.map(file=>{
            return {name: file.name, type:file.type, isPlaying:fileName === file.name};
        })
        console.log('end SET_FILE_TO_PLAY this.mediaFiles=%o',this.mediaFiles)
    }
    @Action
    public set_file_to_play(fileName:string) {
        this.context.commit('SET_FILE_TO_PLAY', fileName);
    }

}
