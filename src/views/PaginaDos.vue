<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    P&aacute;gina 2
                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            contenido de la pagina

            <br><br>

            <ion-button router-link="/pagina1">Ir a P&aacute;gina 1</ion-button>

            <h1>Saludo: {{ $route.params.mensaje }}</h1>
        </ion-content>
    </ion-page>
</template>
<script>
import { IonPage, IonHeader, 
        IonToolbar, IonTitle, 
        IonContent, IonButton
} from '@ionic/vue'

    export default{
        name: 'PaginaDos',
        components:{
            IonPage, IonHeader,
            IonToolbar, IonTitle,
            IonContent, IonButton
        }
    }
</script>
<style>

</style>
