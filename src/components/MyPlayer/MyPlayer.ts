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
    }



    @Watch('storeIndexToPlay', { immediate: false, deep: false })
    onStoreIndexToPlayChanged(newVal: number, oldVal: number) {
        const vueInst=this;
        if( newVal>-1){
            vueInst.FileToPlay=`${mediaFilesLocation}/${this.storeMediaList.mediaFiles[vueInst.storeIndexToPlay].name}`
            vueInst.$refs.video.load();
            vueInst.$refs.video.play();
        }

    }
}
