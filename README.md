# Ionic Google Maps

## Gerar Chave API
Gerar Chave (Credencials) e ativar o serviço (Android, IOS, Browser)
https://console.developers.google.com/

## Instalação
ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="GOOGLE_MAPS_API_KEY_AQUI" --variable API_KEY_FOR_IOS="GOOGLE_MAPS_API_KEY_AQUI"
npm install --save @ionic-native/google-maps

## Página
ionic generate page Maps


## App Module Ts
###imports -> HttpClientModule

import { HttpClientModule } from "@angular/common/http";

###providers -> GoogleMaps, MapsService

import { MapsService } from '../services/maps.service';

import { MapsService } from '../services/maps.service';
                                                    
