import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  IonApp, IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonicVue, IonRouterOutlet, IonCol, IonLabel, IonInput,
  IonButton, IonItem, IonButtons, IonIcon
} from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css'

import * as allIcons from "ionicons/icons";

const app = createApp(App).use(IonicVue).use(router).use(store);

app.component("IonRouterOutlet", IonRouterOutlet)
app.component("IonApp", IonApp)
app.component("IonPage", IonPage)
app.component("IonHeader", IonHeader)
app.component("IonToolbar", IonToolbar)
app.component("IonTitle", IonTitle)
app.component("IonContent", IonContent)
app.component("IonCol", IonCol)
app.component("IonLabel", IonLabel)
app.component("IonInput", IonInput)
app.component("IonButton", IonButton)
app.component("IonItem", IonItem)
app.component("IonButtons", IonButtons)
app.component("IonIcon", IonIcon)

app.mount('#app');

app.mixin({
  methods: {
    getIcon(name) {
      return allIcons[name];
    }
  }
})