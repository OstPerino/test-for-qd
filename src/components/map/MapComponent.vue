<template>
  <div id="map" class="map"></div>
</template>

<script setup lang="ts">
import {IHotSpot} from "@/types/yandex-map.types";
import {Undefinable} from "@/types/types";
// import {ymaps3} from "@yandex/ymaps3-types/packages/external";

ymaps3.ready.then(init);

function init() {

  const clickCallback = (object: Undefinable<IHotSpot>) => {
    if (object?.type === "hotspot") {
      console.log(object);
    }
  }
  // const mouseMoveCallback = (event: any) => { console.log(event); }

  const map = new ymaps3.YMap(document.getElementById('map'), {
    location: {
      center: [25.23, 55.29],
      zoom: 7
    }
  });

  const mapListener = new ymaps3.YMapListener({
    layer: 'any',
    onClick: clickCallback,
    // onMouseMove: mouseMoveCallback
  });

  map.addChild(mapListener);
  map.addChild(new ymaps3.YMapDefaultSchemeLayer({theme: 'dark'}));
}
</script>

<style scoped>
.map {
  width: 600px;
  height: 400px;
}
</style>