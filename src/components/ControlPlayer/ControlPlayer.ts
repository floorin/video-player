import {Component, Vue} from 'vue-property-decorator';
import PlayNext from '@/components/PlayNext/PlayNext.vue'
import PlayPrev from '@/components/PlayPrev/PlayPrev.vue'


@Component({components: {PlayNext, PlayPrev}})
export default class ControlPlayer extends Vue {

}
