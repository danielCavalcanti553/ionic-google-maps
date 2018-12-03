...
import { GoogleMaps } from '@ionic-native/google-maps';
import { HttpClientModule } from "@angular/common/http";
import { MapsService } from '../services/maps.service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FirebaseConfig) // Inicializa o firebase conforme 
                                                    // firebase.config.ts
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    GoogleMaps,
    MapsService
  ]
})
export class AppModule {}
