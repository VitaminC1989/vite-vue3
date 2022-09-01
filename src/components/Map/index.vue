<template>
  <!-- <div class="p-10 mx-auto"></div> -->

  <div id="map" class="w-screen h-screen"></div>
</template>

<script>
import { defineComponent } from "vue";
import Maplibregl from "maplibre-gl";
import BaseBtn from "@coms/BaseBtn/index.vue";

export default defineComponent({
  components: {
    BaseBtn,
  },
  props: {},
  data() {
    return { imgUrl: [] };
  },
  watch: {},
  mounted() {
    const map = new Maplibregl.Map({
      container: "map",
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
      //   center: [12.550343, 55.665957],
      center: [120.1, 29.3],
      zoom: 8,
    });

    const marker = new Maplibregl.Marker()
      .setLngLat([12.550343, 55.665957])
      .addTo(map);

    map.on("load", function () {
      map.addSource("cico-wms-source", {
        type: "raster",
        tiles: [
          `http://decision.cncico.com/cicomap/wms?service=WMS&version=1.1.0&request=GetMap&layers=cicomap:cicomap_group&bbox={bbox-epsg-3857}
&width=767&height=768&srs=EPSG%3A3857&styles=&format=image/png&TRANSPARENT=TRUE`,
        ],
        tileSize: 256,
      });

      map.addLayer(
        {
          id: "cico-wms-source",
          type: "raster",
          source: "cico-wms-source",
          paint: {},
        },
        "aeroway_fill"
      );
    });
  },
  methods: {},
});
</script>

<style lang="scss" scoped></style>
