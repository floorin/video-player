import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {getModule} from "vuex-module-decorators";
import storeMediaList from '@/store/storeMediaList';
import ArrowBackIcon from 'vue-ionicons/dist/ios-arrow-back.vue';
import ArrowForwardIcon from 'vue-ionicons/dist/ios-arrow-forward.vue';

@Component({components: {ArrowForwardIcon}})
export default class PlayNext extends Vue {

}
