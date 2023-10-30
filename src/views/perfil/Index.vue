<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                   Index

                 

                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <ion-router-outlet></ion-router-outlet>

          


        </ion-content>
    </ion-page>
</template>
<script>
import { IonPage, IonHeader, 
        IonToolbar, IonTitle, 
        IonContent, IonButton,
        IonRouterOutlet
} from '@ionic/vue'

    export default{
        name: 'perfil',
        components:{
            IonPage, IonHeader,
            IonToolbar, IonTitle,
            IonContent, IonButton,
            IonRouterOutlet
        }
    }
</script>
<style>

</style>
