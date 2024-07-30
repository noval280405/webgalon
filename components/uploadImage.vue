<template>
    <v-progress-linear color="primary" :model-value="uploadstore.getprogressUpload" :height="10"></v-progress-linear>
    <br>
  <v-file-input label="File input" @change="onfilepicked" variant="solo"></v-file-input>
  <!-- <v-btn color="success" @click="uploadPicture">upload</v-btn> -->
  <br />
</template>

<script setup lang="ts">
  const uploadstore =  uploadStore()

onMounted(()=>{
  uploadstore.setReset()
})
async function uploadPicture() {
  uploadstore.simpanFileAction();
}
function onfilepicked(event: any) {
  uploadstore.setnameFile(event["target"]["files"][0]["name"]);
  uploadstore.setfile(event.target.files[0]);
  uploadstore.setTypeFile(event["target"]["files"][0]["type"]);
  uploadPicture()
}
</script>
