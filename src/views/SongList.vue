<template>
  <div class="list">
    <list-header :playList="playList" />
    <song-content :playList="tracks" @playAll="playAll" :trackCount="trackCount" />
  </div>
</template>

<script>
import ListHeader from "../components/SongList/header";
import SongContent from "../components/SongList/songContent";
import { getSonglist } from "@/api/Home/my.js";
import { getSongDetail } from "../api/Song/song";

export default {
  name: "List",
  data() {
    return {
      playList: {},
      trackIds: [],
      tracks: [],
      trackCount: 0
    };
  },
  components: {
    ListHeader,
    SongContent
  },
  methods: {
    playAll(allSong) {
      this.$store.dispatch("playAllMusic", allSong);
    },
    getTrackIds() {
      return getSonglist({
        id: this.$route.params.id,
        timestamp: new Date().getTime()
      })
    },
    getTracks() {
      return getSongDetail({
        ids: this.trackIds,
        timestamp: new Date().getTime()
      })
    }
  },
  beforeDestroy() {
    this.$store.commit("toggleLoad", 1);
  },
  async created() {
    this.$store.commit("toggleLoad", 0);
		let SongList = await this.getTrackIds();
    this.playList = SongList.playlist;
    this.trackIds = SongList.playlist.trackIds
      .map(key => key.id)
			.reduce((total, cur) => `${total},${cur}`);
		this.trackCount = SongList.playlist.trackIds.length;
		let TrackRes = await this.getTracks();
		this.tracks = TrackRes.songs
  }
};
</script>

<style lang="stylus" scoped>
.list {
  overflow-y: auto;
}
</style>