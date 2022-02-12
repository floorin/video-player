import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {getModule} from 'vuex-module-decorators';
import storeMediaList from '@/store/storeMediaList';
import {TMediaFile} from "@/types/TMediaFile";
@Component({components: {}})
export default class PlayerList extends Vue {
    private mediaList:TMediaFile[] = []
    private storeMediaList = getModule(storeMediaList);

    private playFile(fileNameToPlay:string){
        const indexToPlay = this.mediaList.findIndex(file=> file.name === fileNameToPlay )
        console.log('indexToPlay=%o, for fileNameToPlay=%o',indexToPlay, fileNameToPlay)
        if(indexToPlay>=0){
                    this.mediaList[indexToPlay].isPlaying=true;
                        this.storeMediaList.set_file_to_play(fileNameToPlay)
                        }
        this.mediaList=this.mediaList.map(file=>{
           return {name: file.name, type:file.type, isPlaying:fileNameToPlay=== file.name};
        })

    }

    /*
    private get mediaList():TMediaFile[]{
        return this.storeMediaList.mediaFiles;
    }
    */

    public created(): void {
        console.log('create PlayerList')
        this.mediaList = [...this.storeMediaList.mediaFiles];
    }


}
