<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Another Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
    <ion-button @click="failStore.wipeComplexArr">WIPE object</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { useFailStore } from '@/stores/fail';

const failStore = useFailStore()
</script>
