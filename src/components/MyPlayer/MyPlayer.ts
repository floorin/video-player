import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {getModule} from "vuex-module-decorators";
import storeMediaList from '@/store/storeMediaList';
import {mediaFilesLocation} from "@/config";


@Component({components: {}})
export default class MyPlayer extends Vue {
    public FileToPlay = '';
    public storeMediaList = getModule(storeMediaList);
    public $refs: any;

    public get storeIndexToPlay():number{
       return this.storeMediaList.mediaFiles.findIndex(file=> file.isPlaying );
        //return (indexToPlay>-1?`${mediaFilesLocation}/${this.storeMediaList.mediaFiles[indexToPlay].name}`:'');
    }



    @Watch('storeIndexToPlay', { immediate: false, deep: false })
    onStoreIndexToPlayChanged(newVal: number, oldVal: number) {
        console.log('onFileNameToPlayChanged')
        const vueInst=this;
        //const video = document.getElementById('video') as HTMLVideoElement;
        if( newVal>-1){
            vueInst.FileToPlay=`${mediaFilesLocation}/${this.storeMediaList.mediaFiles[vueInst.storeIndexToPlay].name}`
            vueInst.$refs.video.play();
        }

    }
}
