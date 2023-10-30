<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    P&aacute;gina 1
                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            contenido de la pagina

            <br><br>

            <ion-button router-link="/pagina2/hola">Ir a P&aacute;gina 2</ion-button>

        </ion-content>
    </ion-page>
</template>
<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton} from '@ionic/vue'

    export default{
        name: 'PaginaUno',
        components:{
            IonPage, IonHeader,
            IonToolbar, IonTitle,
            IonContent, IonButton
        }
    }
</script>
<style>

</style>
