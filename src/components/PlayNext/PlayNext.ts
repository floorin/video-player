import {Component, Vue, Emit } from 'vue-property-decorator';
import {getModule} from "vuex-module-decorators";
import EventsBus from "@/store/storeEventBus";
import ArrowForwardIcon from 'vue-ionicons/dist/ios-arrow-forward.vue';

@Component({components: {ArrowForwardIcon}})
export default class PlayNext extends Vue {
    public EventBusStore = getModule(EventsBus);
    public play(){
        this.EventBusStore.set_event({name:'playForwardFile',params:{}});
    }
}
