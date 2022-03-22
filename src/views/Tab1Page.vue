<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
     {{failStore.getFirstComplexArrHey}}
     <ion-button @click="navigateToAnotherPage">To the other page</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { useFailStore } from '@/stores/fail';
import router from '@/router';

const failStore = useFailStore()

const navigateToAnotherPage = () => {
  router.push('/anotherpage/')
}
</script>
