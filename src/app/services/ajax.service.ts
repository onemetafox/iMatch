import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { StorageService } from './../services/storage.service';
import { Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed, Capacitor } from '@capacitor/core';
import { Router } from '@angular/router';
// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
 
const { PushNotifications, Device, Network } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  BaseUrl : any = 'https://web.sicsglobal.com/iMatch/api/v1/';

  constructor(
    // private androidPermissions: AndroidPermissions,
    public storageservice: StorageService,
    private geolocation: Geolocation,
    public http: HttpClient,
    private router: Router,
    ) {
      console.log('Hello AjaxService Provider');
     }

     initPush() {
      if (Capacitor.platform == 'web') {
        console.log('This is a Web Browser View');
          this.toGetUserLocation();
            // this.toGetNetworkInfo();
      } else if (Capacitor.platform == 'android') {
          this.registerPush();
            // this.toGetNetworkInfo();
              this.ToGetDeviceInfo();
                // this.toGetUserLocation();
                //   this.filePermission();

        console.log('This is an Android Platform');
      } else if (Capacitor.platform == 'ios') {
          this.registerPush();
            // this.toGetNetworkInfo();
              this.ToGetDeviceInfo();
                // this.toGetUserLocation();
                //   this.filePermission();

        console.log('This is an ios Platform');
      }
    }

    // async filePermission() {
    //   this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
    //     result => console.log('Has permission?', result.hasPermission),
    //     err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    //   );
    //   this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
    // }

   async ToGetDeviceInfo() {
      console.log('To Get Device Information');

      const DeviceInfo = await Device.getInfo();
      console.log('DeviceInfo:',DeviceInfo);
      this.storageservice.setStorage('DeviceInfo',DeviceInfo);

      // const BatteryInfo = await Device.getBatteryInfo();
      // console.log('BatteryInfo:',BatteryInfo);
      // this.storageservice.setStorage('BatteryInfo',BatteryInfo);

      // const LanguageCode = await Device.getLanguageCode();
      // console.log('LanguageCode:',LanguageCode);
      // this.storageservice.setStorage('LanguageCode',LanguageCode);

    }

    // async toGetNetworkInfo() {
    //   console.log('To Get Network Information');

    //   let handler = Network.addListener('networkStatusChange', (status) => {
    //     console.log("Network status changed", status);
    //     console.log('handler:',handler);
    //     this.storageservice.setStorage('NetworkInfo',handler);
    //   });

    //   let NetworkStatus = await Network.getStatus();
    //   console.log('NetworkStatus:',NetworkStatus);
    //   this.storageservice.setStorage('NetworkStatus',NetworkStatus);
    // }

    // async toGetUserLocation() {
    //   console.log('To Get User Location');

    //   const UserLocation = await Geolocation.getCurrentPosition();
    //   console.log('UserLocation:', UserLocation);
    //   this.storageservice.setStorage('UserLocation',UserLocation);
    // }

    async toGetUserLocation() {
      console.log('To Get User Location');

      this.geolocation.getCurrentPosition().then((resp) => {
        console.log('resp:',resp);
          // this.storageservice.setStorage('UserLocation',resp);

        // resp.coords.latitude
        // resp.coords.longitude
       }).catch((error) => {
         console.log('Error getting location', error);
       });
    }

    private registerPush() {
      PushNotifications.requestPermission().then((permission) => {
        if (permission.granted) {
          // Register with Apple / Google to receive push via APNS/FCM
          PushNotifications.register();
        } else {
          // No permission for push granted
        }
      });

      PushNotifications.addListener(
        'registration',
        (token: PushNotificationToken) => {
          console.log('My token: ' + JSON.stringify(token));
          this.storageservice.setStorage('DeviceToken',token);
        }
      );

      PushNotifications.addListener('registrationError', (error: any) => {
        console.log('Error: ' + JSON.stringify(error));
      });
   
      PushNotifications.addListener(
        'pushNotificationReceived',
        async (notification: PushNotification) => {
          console.log('Push received: ' + JSON.stringify(notification));
        }
      );
   
      PushNotifications.addListener(
        'pushNotificationActionPerformed',
        async (notification: PushNotificationActionPerformed) => {
          const data = notification.notification.data;
          console.log('Action performed: ' + JSON.stringify(notification.notification));
          if (data.detailsId) {
            this.router.navigateByUrl(`/home/${data.detailsId}`);
          }
        }
      );
    }

}