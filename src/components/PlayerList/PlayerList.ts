import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {getModule} from 'vuex-module-decorators';
import storeMediaList from '@/store/storeMediaList';
import EventsBus from "@/store/storeEventBus";
import {TMediaFile} from "@/types/TMediaFile";
@Component({components: {}})
export default class PlayerList extends Vue {
    private mediaList:TMediaFile[] = []
    private storeMediaList = getModule(storeMediaList);
    private EventBusStore = getModule(EventsBus);

    private get currentIndexInPlay():number{
        return this.mediaList.findIndex(file=> file.isPlaying );
    }

    private playFile(fileNameToPlay:string){
        const indexToPlay = this.mediaList.findIndex(file=> file.name === fileNameToPlay )
        if(indexToPlay>=0){
                    this.mediaList[indexToPlay].isPlaying=true;
                        this.storeMediaList.set_file_to_play(fileNameToPlay)
                        }
        this.mediaList=this.mediaList.map(file=>{
           return {name: file.name, type:file.type, isPlaying:fileNameToPlay=== file.name};
        })
    }

    private playForwardFile(){
        const isLastFileInlIst = (this.currentIndexInPlay=== this.mediaList.length-1);
        if(isLastFileInlIst){
            this.playFile(this.mediaList[0].name);
        }else{
            this.playFile(this.mediaList[this.currentIndexInPlay+1].name);
        }
    }

    private playBackFile(){
        const isFirstFileInlIst = (this.currentIndexInPlay===0);
        if(isFirstFileInlIst){
            this.playFile(this.mediaList[this.mediaList.length-1].name);
        }else{
            this.playFile(this.mediaList[this.currentIndexInPlay-1].name);
        }
    }


    @Watch('EventBusStore.event.eventId')
    onEventIdChanged() {
        const vueInst=this;
        if(vueInst.EventBusStore.event.name=='playForwardFile'){
            if(this.currentIndexInPlay<0){//nothing is playing right now
                this.playFile(this.mediaList[0].name);
            }else{
                this.playForwardFile();
            }

        }
        if(vueInst.EventBusStore.event.name=='playBackFile'){
            if(this.currentIndexInPlay<0){//nothing is playing right now
                this.playFile(this.mediaList[0].name);
            }
            else{
                this.playBackFile();
            }
        }
    }

    public created(): void {
        this.mediaList = [...this.storeMediaList.mediaFiles];
    }



}
