import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {getModule} from "vuex-module-decorators";
import EventsBus from "@/store/storeEventBus";
import ArrowBackIcon from 'vue-ionicons/dist/ios-arrow-back.vue';

@Component({components: {ArrowBackIcon}})
export default class PlayPrev extends Vue {
    public EventBusStore = getModule(EventsBus);
    public play(){
        this.EventBusStore.set_event({name:'playBackFile',params:{}});
    }
}
