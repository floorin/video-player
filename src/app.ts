import { Component, Vue } from 'vue-property-decorator';
import {getModule} from "vuex-module-decorators";
import storeMediaList from '@/store/storeMediaList';
import MyPlayer from '@/components/MyPlayer/MyPlayer.vue'
import PlayerList from '@/components/PlayerList/PlayerList.vue'
import ControlPlayer from '@/components/ControlPlayer/ControlPlayer.vue'

import {mediaFiles} from "@/config";
@Component({components: {MyPlayer, PlayerList, ControlPlayer}})
export default class App extends Vue {

    private storeMediaList = getModule(storeMediaList);

    public created(): void {
        //load media files
        mediaFiles.forEach(mediaFile => {
            this.storeMediaList.push_file_to_media_list({...mediaFile, isPlaying:false})
        })
    }

}
